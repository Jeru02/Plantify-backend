import axios from "axios";
import  multer  from "multer";

import { QueryResult } from "pg";
import { Request, Response } from "express";
import FormData from "form-data";

export const getFakeData = (req: Request, res: Response): void => {
  axios
    .get("https://fakestoreapi.com/products/1")
    .then((response) => {
      res.status(200).send({ fakeData: response.data });
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
    });
};

export const getCurrentWeather = (req: Request, res: Response): void => {
  axios
    .get(
      "https://api.weatherapi.com/v1/forecast.json?key=1162c37bb7fa416083d150602252905&q=Manchester&days=5&aqi=no&alerts=yes"
    )
    .then((response) => {
      res
        .status(200)
        .send({ currentWeather: response.data.forecast.forecastday[0].day });
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
    });
};



export const postImageToPlantNet = async (req: Request, res: Response): Promise<void> => {
  
  const imageFile = req.file;

  if (!imageFile) {
    res.status(400).json({ error: 'No image uploaded' });
    return;
  }
  try {
    const formData = new FormData();
    formData.append('images', imageFile.buffer, {
      filename: imageFile.originalname,
      contentType: imageFile.mimetype,
    });
    formData.append('organs', 'leaf'); // You can make this dynamic or user-selected
    formData.append('include-related-images', 'false');
    formData.append('no-reject', 'true');
    formData.append('nb-results', '5');
    formData.append('lang', 'en');
    formData.append('type', 'kt');
    formData.append('api-key', '2b10iTe1G5xU8fnT08By99h');
    const plantNetResponse = await axios.post(
      'https://my-api.plantnet.org/v2/identify/all',
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );
    res.status(200).json({ plantData: plantNetResponse.data.results[0] });
  } catch (error: any) {
    console.error('PlantNet API error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to identify plant' });
  }

};

export const getPlantByImageUrl = (req: Request, res: Response): void => {
  // ?formData = frontend data

  const image = req.query.img_url;

 
  axios
    .get("https://my-api.plantnet.org/v2/identify/all", {
      params: {
        "include-related-images": true,
        "no-reject": true,
        "nb-results": 5,
        lang: "en",
        type: "kt",
        "api-key": "2b10iTe1G5xU8fnT08By99h",
        images: image,
        // organs: auto,
      },
    })
    .then((response) => {
      const prettyData = response.data.results.map((singleResult: any) => {
        return {
          score: singleResult.score,
          commonName: singleResult.species.commonNames,
          scientificName: singleResult.species.scientificName,
        };
      });

      res.status(200).send({ plantData: response.data.results });
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
    });
};

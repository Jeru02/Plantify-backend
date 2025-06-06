import axios from "axios";

import { QueryResult } from "pg";
import { Request, Response } from "express";

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

export const postImageToPlantNet = (req: Request, res: Response): void => {
  
  const formData = req.body.formData;

  //  {
  //     formData: file[]
  //     
  //   };

  axios
    .post("https://my-api.plantnet.org/v2/identify/all", {
      "include-related-images": false,
      "no-reject": true,
      "nb-results": 5,
      lang: "en",
      type: "kt",
      "api-key": "2b10iTe1G5xU8fnT08By99h",
      images: formData,
      // organs: auto,
    })
    .then((response) => {
      res.status(201).send({ plantData: response.data.results[0] });
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
    });
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

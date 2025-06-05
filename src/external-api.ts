import axios from "axios";

import { QueryResult } from "pg";
import { Request, Response } from "express";


export const getFakeData = (req: Request, res: Response): void => {
  axios
    .get("https://fakestoreapi.com/products/1")
    .then((response) => {
      res.status(200).send({fakeData: response.data})
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
      res.status(200).send({ currentWeather: response.data.forecast.forecastday[0].day });
    })
    .catch((error) => {
      // Handle the error response
      console.error(error);
    });
};
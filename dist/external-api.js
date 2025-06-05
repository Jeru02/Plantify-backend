"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentWeather = exports.getFakeData = void 0;
const axios_1 = __importDefault(require("axios"));
const getFakeData = (req, res) => {
    axios_1.default
        .get("https://fakestoreapi.com/products/1")
        .then((response) => {
        res.status(200).send({ fakeData: response.data });
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.getFakeData = getFakeData;
const getCurrentWeather = (req, res) => {
    axios_1.default
        .get("https://api.weatherapi.com/v1/forecast.json?key=1162c37bb7fa416083d150602252905&q=Manchester&days=5&aqi=no&alerts=yes")
        .then((response) => {
        res.status(200).send({ currentWeather: response.data.forecast.forecastday[0] });
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.getCurrentWeather = getCurrentWeather;

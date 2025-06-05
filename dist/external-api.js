"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlantByImageUrl = exports.postImageToPlantNet = exports.getCurrentWeather = exports.getFakeData = void 0;
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
        res
            .status(200)
            .send({ currentWeather: response.data.forecast.forecastday[0].day });
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.getCurrentWeather = getCurrentWeather;
const postImageToPlantNet = (req, res) => {
    const formData = req.query.formData;
    const auto = ["auto"];
    axios_1.default
        .post("https://my-api.plantnet.org/v2/identify/all", {
        "include-related-images": false,
        "no-reject": true,
        "nb-results": 5,
        lang: "en",
        type: "kt",
        "api-key": "2b10iTe1G5xU8fnT08By99h",
        images: formData,
    })
        .then((response) => {
        res.status(201).send({ plantData: response.data.results[0] });
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.postImageToPlantNet = postImageToPlantNet;
const getPlantByImageUrl = (req, res) => {
    const image = req.query.img_url;
    const auto = ["auto"];
    axios_1.default
        .get("https://my-api.plantnet.org/v2/identify/all", {
        params: {
            "include-related-images": true,
            "no-reject": true,
            "nb-results": 5,
            lang: "en",
            type: "kt",
            "api-key": "2b10iTe1G5xU8fnT08By99h",
            images: image,
        },
    })
        .then((response) => {
        const prettyData = response.data.results.map((singleResult) => {
            return {
                score: singleResult.score,
                commonName: singleResult.species.commonNames,
                scientificName: singleResult.species.scientificName,
            };
        });
        res.status(200).send({ plantData: response.data.results });
    })
        .catch((error) => {
        console.error(error);
    });
};
exports.getPlantByImageUrl = getPlantByImageUrl;

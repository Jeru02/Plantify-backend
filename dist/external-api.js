"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlantByImageUrl = exports.postImageToPlantNet = exports.getCurrentWeather = exports.getFakeData = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
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
const postImageToPlantNet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const imageFile = req.file;
    if (!imageFile) {
        res.status(400).json({ error: "No image uploaded" });
        return;
    }
    try {
        const formData = new form_data_1.default();
        formData.append("images", imageFile.buffer, {
            filename: imageFile.originalname,
            contentType: imageFile.mimetype,
        });
        formData.append("organs", "leaf");
        const plantNetResponse = yield axios_1.default.post("https://my-api.plantnet.org/v2/identify/all?api-key=2b10iTe1G5xU8fnT08By99h&include-related-images=false&no-reject=true&nb-results=5&lang=en&type=kt", formData, {
            headers: Object.assign({}, formData.getHeaders()),
        });
        res.status(200).json({ plantData: plantNetResponse.data.results[0] });
    }
    catch (error) {
        console.error("PlantNet API error:", ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
        res.status(500).json({ error: "Failed to identify plant" });
    }
});
exports.postImageToPlantNet = postImageToPlantNet;
const getPlantByImageUrl = (req, res) => {
    const image = req.query.img_url;
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const { PORT = 9090 } = process.env;
api_1.default.listen(PORT, () => console.log(`Listening on ${PORT}...`));

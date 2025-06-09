"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = __importDefault(require("./seed"));
const plants_development_data_1 = __importDefault(require("../data/development-data/plants.development-data"));
const quiz_development_data_1 = __importDefault(require("../data/development-data/quiz.development-data"));
const connection_1 = __importDefault(require("../connection"));
const users_test_data_1 = __importDefault(require("../data/test-data/users.test-data"));
const liked_plants_test_data_1 = __importDefault(require("../data/test-data/liked_plants.test-data"));
const runSeed = () => {
    return (0, seed_1.default)(plants_development_data_1.default, quiz_development_data_1.default, users_test_data_1.default, liked_plants_test_data_1.default).then(() => connection_1.default.end());
};
runSeed();

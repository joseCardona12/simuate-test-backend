"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
const userModel_1 = __importDefault(require("../models/userModel"));
const likeModel_1 = __importDefault(require("../models/likeModel"));
const postModel_1 = __importDefault(require("../models/postModel"));
(0, dotenv_1.configDotenv)();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [userModel_1.default, postModel_1.default, likeModel_1.default]
});
exports.default = sequelize;

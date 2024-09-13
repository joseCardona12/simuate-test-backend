"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var dotenv_1 = require("dotenv");
var userModel_1 = require("../models/userModel");
var likeModel_1 = require("../models/likeModel");
var postModel_1 = require("../models/postModel");
(0, dotenv_1.configDotenv)();
var sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [userModel_1.default, postModel_1.default, likeModel_1.default]
});
exports.default = sequelize;

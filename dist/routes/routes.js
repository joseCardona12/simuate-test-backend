"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const authRouter_1 = __importDefault(require("./authRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const likeRouter_1 = __importDefault(require("./likeRouter"));
const routes = (0, express_1.Router)();
routes.use("/auth", authRouter_1.default);
routes.use("/users/", userRouter_1.default);
routes.use("/posts", postRouter_1.default);
routes.use("/likes", likeRouter_1.default);
exports.default = routes;

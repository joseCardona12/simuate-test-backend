"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controllers/likeController"));
const likeRouter = (0, express_1.Router)();
likeRouter.get("/", likeController_1.default.getLikes);
likeRouter.get("/:id", likeController_1.default.getLikeById);
likeRouter.post("/", likeController_1.default.createLike);
likeRouter.put("/:id", likeController_1.default.updateLike);
likeRouter.delete("/:id", likeController_1.default.deleteLike);
exports.default = likeRouter;

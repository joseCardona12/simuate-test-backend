"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const postRouter = (0, express_1.Router)();
postRouter.get("/", postController_1.default.getPost);
postRouter.get("/:id", postController_1.default.getPostById);
postRouter.post("/", postController_1.default.createPost);
postRouter.put("/:id", postController_1.default.updatePost);
postRouter.delete("/:id", postController_1.default.deletePost);
exports.default = postRouter;

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
const tsyringe_1 = require("tsyringe");
const postService_1 = __importDefault(require("../services/postService"));
const util_1 = __importDefault(require("../utils/util"));
class PostController {
    static getPost(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const postService = tsyringe_1.container.resolve(postService_1.default);
                const getPosts = yield postService.getPost();
                res.status(200).json({ message: "Posts found", posts: getPosts });
            }
            catch (error) {
                res.status(404).json({ message: "Posts not found", error });
            }
        });
    }
    static getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id)
                    res.status(500).json({ message: "Is necesary params id" });
                const postService = tsyringe_1.container.resolve(postService_1.default);
                const getPost = yield postService.getPostById(parseInt(req.params.id));
                res.status(200).json({ message: "Post found", post: getPost });
            }
            catch (error) {
                res.status(404).json({ message: "Post not found", error });
            }
        });
    }
    static createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, user_id } = req.body;
                const dataVerify = util_1.default.verifyData(title, description, user_id);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesary all params title,description, user_id" });
                    return;
                }
                const postService = tsyringe_1.container.resolve(postService_1.default);
                const createdPost = yield postService.createPost({ title, description, user_id });
                res.status(201).json({ message: "Created post correctly", post: createdPost });
            }
            catch (error) {
                res.status(404).json({ message: "Error to create post", error });
            }
        });
    }
    static updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { title, description, user_id } = req.body;
                const dataVerify = util_1.default.verifyData(title, description, user_id);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesay all params title,description,user_id" });
                    return;
                }
                ;
                const postService = tsyringe_1.container.resolve(postService_1.default);
                yield postService.updatePost(parseInt(id), { title, description, user_id });
                res.status(200).json({ message: "Updated post correctly" });
            }
            catch (error) {
                res.status(404).json({ message: "Post not found" });
            }
        });
    }
    static deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const postService = tsyringe_1.container.resolve(postService_1.default);
                yield postService.deletePost(parseInt(id));
                res.status(200).json({ message: "Deleted post correctly" });
            }
            catch (error) {
                res.status(404).json({ message: "Post not found" });
            }
        });
    }
}
exports.default = PostController;

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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var postService_1 = require("../services/postService");
var util_1 = require("../utils/util");
var PostController = /** @class */ (function () {
    function PostController() {
    }
    PostController.getPost = function (_, res) {
        return __awaiter(this, void 0, void 0, function () {
            var postService, getPosts, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        postService = tsyringe_1.container.resolve(postService_1.default);
                        return [4 /*yield*/, postService.getPost()];
                    case 1:
                        getPosts = _a.sent();
                        res.status(200).json({ message: "Posts found", posts: getPosts });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(404).json({ message: "Posts not found", error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.getPostById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, postService, getPost, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id)
                            res.status(500).json({ message: "Is necesary params id" });
                        postService = tsyringe_1.container.resolve(postService_1.default);
                        return [4 /*yield*/, postService.getPostById(parseInt(req.params.id))];
                    case 1:
                        getPost = _a.sent();
                        res.status(200).json({ message: "Post found", post: getPost });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(404).json({ message: "Post not found", error: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.createPost = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, description, user_id, dataVerify, postService, createdPost, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, title = _a.title, description = _a.description, user_id = _a.user_id;
                        dataVerify = util_1.default.verifyData(title, description, user_id);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesary all params title,description, user_id" });
                            return [2 /*return*/];
                        }
                        postService = tsyringe_1.container.resolve(postService_1.default);
                        return [4 /*yield*/, postService.createPost({ title: title, description: description, user_id: user_id })];
                    case 1:
                        createdPost = _b.sent();
                        res.status(201).json({ message: "Created post correctly", post: createdPost });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        res.status(404).json({ message: "Error to create post", error: error_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.updatePost = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, description, user_id, dataVerify, postService, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, title = _a.title, description = _a.description, user_id = _a.user_id;
                        dataVerify = util_1.default.verifyData(title, description, user_id);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesay all params title,description,user_id" });
                            return [2 /*return*/];
                        }
                        ;
                        postService = tsyringe_1.container.resolve(postService_1.default);
                        return [4 /*yield*/, postService.updatePost(parseInt(id), { title: title, description: description, user_id: user_id })];
                    case 1:
                        _b.sent();
                        res.status(200).json({ message: "Updated post correctly" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        res.status(404).json({ message: "Post not found" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.deletePost = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, postService, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        postService = tsyringe_1.container.resolve(postService_1.default);
                        return [4 /*yield*/, postService.deletePost(parseInt(id))];
                    case 1:
                        _a.sent();
                        res.status(200).json({ message: "Deleted post correctly" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(404).json({ message: "Post not found" });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PostController;
}());
exports.default = PostController;

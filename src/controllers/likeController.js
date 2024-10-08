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
var likeService_1 = require("../services/likeService");
var util_1 = require("../utils/util");
var LikeController = /** @class */ (function () {
    function LikeController() {
    }
    LikeController.getLikes = function (_, res) {
        return __awaiter(this, void 0, void 0, function () {
            var likeService, getLikes, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        likeService = tsyringe_1.container.resolve(likeService_1.default);
                        return [4 /*yield*/, likeService.getLikes()];
                    case 1:
                        getLikes = _a.sent();
                        if (!getLikes) {
                            res.status(404).json({ message: "Likes not found" });
                            return [2 /*return*/];
                        }
                        res.status(200).json({ message: "Likes found", likes: getLikes });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(404).json({ message: "Error to get likes", error: error_1 });
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LikeController.getLikeById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, likeService, getLike, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        likeService = tsyringe_1.container.resolve(likeService_1.default);
                        return [4 /*yield*/, likeService.getLikeById(parseInt(id))];
                    case 1:
                        getLike = _a.sent();
                        if (!getLike) {
                            res.status(404).json({ message: "Like not found" });
                            return [2 /*return*/];
                        }
                        ;
                        res.status(200).json({ message: "Like found", like: getLike });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(404).json({ message: "Erro to get like", error: error_2 });
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LikeController.createLike = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, post_id, dataVerify, likeService, createdLike, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, quantity = _a.quantity, post_id = _a.post_id;
                        dataVerify = util_1.default.verifyData(quantity, post_id);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesary all params quantity, post_id" });
                            return [2 /*return*/];
                        }
                        ;
                        likeService = tsyringe_1.container.resolve(likeService_1.default);
                        return [4 /*yield*/, likeService.createLike({ quantity: quantity, post_id: post_id })];
                    case 1:
                        createdLike = _b.sent();
                        res.status(201).json({ message: "Created like correctly", createdLike: createdLike });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        res.status(404).json({ message: "Like not found", error: error_3 });
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    LikeController.updateLike = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, quantity, post_id, dataVerify, likeService, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, quantity = _a.quantity, post_id = _a.post_id;
                        dataVerify = util_1.default.verifyData(quantity, post_id);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesary all params quantity,post_id" });
                            return [2 /*return*/];
                        }
                        ;
                        likeService = tsyringe_1.container.resolve(likeService_1.default);
                        return [4 /*yield*/, likeService.updateLike(parseInt(id), { quantity: quantity, post_id: post_id })];
                    case 1:
                        _b.sent();
                        res.status(200).json({ message: "Updated like correctly" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        res.status(404).json({ message: "Like not found", error: error_4 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    LikeController.deleteLike = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, likeService, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        likeService = tsyringe_1.container.resolve(likeService_1.default);
                        return [4 /*yield*/, likeService.deleteLike(parseInt(id))];
                    case 1:
                        _a.sent();
                        res.status(200).json({ message: "Deleted like correctly" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(404).json({ message: "Like not found", error: error_5 });
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return LikeController;
}());
exports.default = LikeController;
;

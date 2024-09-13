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
const likeService_1 = __importDefault(require("../services/likeService"));
const util_1 = __importDefault(require("../utils/util"));
class LikeController {
    static getLikes(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const likeService = tsyringe_1.container.resolve(likeService_1.default);
                const getLikes = yield likeService.getLikes();
                if (!getLikes) {
                    res.status(404).json({ message: "Likes not found" });
                    return;
                }
                res.status(200).json({ message: "Likes found", likes: getLikes });
            }
            catch (error) {
                res.status(404).json({ message: "Error to get likes", error });
            }
            ;
        });
    }
    ;
    static getLikeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const likeService = tsyringe_1.container.resolve(likeService_1.default);
                const getLike = yield likeService.getLikeById(parseInt(id));
                if (!getLike) {
                    res.status(404).json({ message: "Like not found" });
                    return;
                }
                ;
                res.status(200).json({ message: "Like found", like: getLike });
            }
            catch (error) {
                res.status(404).json({ message: "Erro to get like", error });
            }
            ;
        });
    }
    ;
    static createLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { quantity, post_id } = req.body;
                const dataVerify = util_1.default.verifyData(quantity, post_id);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesary all params quantity, post_id" });
                    return;
                }
                ;
                const likeService = tsyringe_1.container.resolve(likeService_1.default);
                const createdLike = yield likeService.createLike({ quantity, post_id });
                res.status(201).json({ message: "Created like correctly", createdLike });
            }
            catch (error) {
                res.status(404).json({ message: "Like not found", error });
            }
            ;
        });
    }
    ;
    static updateLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { quantity, post_id } = req.body;
                const dataVerify = util_1.default.verifyData(quantity, post_id);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesary all params quantity,post_id" });
                    return;
                }
                ;
                const likeService = tsyringe_1.container.resolve(likeService_1.default);
                yield likeService.updateLike(parseInt(id), { quantity, post_id });
                res.status(200).json({ message: "Updated like correctly" });
            }
            catch (error) {
                res.status(404).json({ message: "Like not found", error });
            }
        });
    }
    ;
    static deleteLike(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const likeService = tsyringe_1.container.resolve(likeService_1.default);
                yield likeService.deleteLike(parseInt(id));
                res.status(200).json({ message: "Deleted like correctly" });
            }
            catch (error) {
                res.status(404).json({ message: "Like not found", error });
            }
            ;
        });
    }
    ;
}
exports.default = LikeController;
;

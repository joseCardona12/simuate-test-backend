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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const util_1 = __importDefault(require("../utils/util"));
const tsyringe_1 = require("tsyringe");
const authService_1 = __importDefault(require("../services/authService"));
class AuthController {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const dataVerify = util_1.default.verifyData(name, email, password);
            if (!dataVerify) {
                res.status(400).json({ message: "Error to create user. Is necesary all params" });
                return;
            }
            const authService = tsyringe_1.container.resolve(authService_1.default);
            const createdUser = yield authService.registerUser({ name, email, password });
            if (createdUser) {
                const tokenGenerate = AuthController.generateToken({ name, email, password });
                res.status(201).json({ message: "Created user correctly", user: createdUser, token: tokenGenerate });
                return;
            }
            res.status(400).json({ message: "User exists. Try again..." });
        });
    }
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const dataVerify = util_1.default.verifyData(email, password);
            if (!dataVerify) {
                res.status(400).json({ message: "Error to login user. Is necesary all params" });
                return;
            }
            const authService = tsyringe_1.container.resolve(authService_1.default);
            const getUser = yield authService.loginUser({ email });
            if (!getUser) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            const tokenGenerate = AuthController.generateToken({ email, password });
            res.status(200).json({ message: "User found", user: getUser, token: tokenGenerate });
        });
    }
}
AuthController.generateToken = (user) => {
    return jsonwebtoken_1.default.sign(user, "SECRET", { expiresIn: "1h" });
};
exports.default = AuthController;

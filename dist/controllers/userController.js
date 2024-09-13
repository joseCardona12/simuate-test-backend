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
const userService_1 = __importDefault(require("../services/userService"));
const util_1 = __importDefault(require("../utils/util"));
class UserController {
    static getUsers(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(userService_1.default);
                const getUsers = yield userService.getUsers();
                res.status(200).json({ message: "users found", users: getUsers });
            }
            catch (error) {
                res.status(404).json({ message: "Error to get users", error });
            }
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(userService_1.default);
                const getUser = yield userService.getUserById(parseInt(req.params.id));
                res.status(200).json({ messae: "User found", user: getUser });
            }
            catch (error) {
                res.status(404).json({ message: "Error to get user", error });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const dataVerify = util_1.default.verifyData(name, email, password);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesary all params name,email,password" });
                    return;
                }
                const userService = tsyringe_1.container.resolve(userService_1.default);
                const createdUser = yield userService.postUser({ name, email, password });
                if (!createdUser) {
                    res.status(400).json({ message: "User exists. Try again!" });
                    return;
                }
                res.status(201).json({ message: "Created user correctly", user: createdUser });
            }
            catch (error) {
                res.status(400).json({ message: "Error to create user", error });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const dataVerify = util_1.default.verifyData(name, email, password);
                if (!dataVerify) {
                    res.status(400).json({ message: "Is necesary all params name,email,password" });
                    return;
                }
                const userService = tsyringe_1.container.resolve(userService_1.default);
                const updatedUser = yield userService.updateUser(parseInt(req.params.id), { name, email, password });
                res.status(200).json({ message: "Updated user correctly", user: updatedUser });
            }
            catch (error) {
                res.status(500).json({ message: "Error to update user", error });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = tsyringe_1.container.resolve(userService_1.default);
                yield userService.deleteUser(parseInt(req.params.id));
                res.status(200).json({ message: "Deleted user correctly" });
            }
            catch (error) {
                res.status(500).json({ message: "Error to delete user", error });
            }
        });
    }
}
exports.default = UserController;

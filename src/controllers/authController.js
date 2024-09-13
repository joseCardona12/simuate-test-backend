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
var jsonwebtoken_1 = require("jsonwebtoken");
var util_1 = require("../utils/util");
var tsyringe_1 = require("tsyringe");
var authService_1 = require("../services/authService");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.registerUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, dataVerify, authService, createdUser, tokenGenerate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                        dataVerify = util_1.default.verifyData(name, email, password);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Error to create user. Is necesary all params" });
                            return [2 /*return*/];
                        }
                        authService = tsyringe_1.container.resolve(authService_1.default);
                        return [4 /*yield*/, authService.registerUser({ name: name, email: email, password: password })];
                    case 1:
                        createdUser = _b.sent();
                        if (createdUser) {
                            tokenGenerate = AuthController.generateToken({ name: name, email: email, password: password });
                            res.status(201).json({ message: "Created user correctly", user: createdUser, token: tokenGenerate });
                            return [2 /*return*/];
                        }
                        res.status(400).json({ message: "User exists. Try again..." });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthController.loginUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, dataVerify, authService, getUser, tokenGenerate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        dataVerify = util_1.default.verifyData(email, password);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Error to login user. Is necesary all params" });
                            return [2 /*return*/];
                        }
                        authService = tsyringe_1.container.resolve(authService_1.default);
                        return [4 /*yield*/, authService.loginUser({ email: email })];
                    case 1:
                        getUser = _b.sent();
                        if (!getUser) {
                            res.status(400).json({ message: "User not found" });
                            return [2 /*return*/];
                        }
                        tokenGenerate = AuthController.generateToken({ email: email, password: password });
                        res.status(200).json({ message: "User found", user: getUser, token: tokenGenerate });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthController.generateToken = function (user) {
        return jsonwebtoken_1.default.sign(user, "SECRET", { expiresIn: "1h" });
    };
    return AuthController;
}());
exports.default = AuthController;

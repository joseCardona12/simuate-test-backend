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
var userService_1 = require("../services/userService");
var util_1 = require("../utils/util");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.getUsers = function (_, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, getUsers, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userService = tsyringe_1.container.resolve(userService_1.default);
                        return [4 /*yield*/, userService.getUsers()];
                    case 1:
                        getUsers = _a.sent();
                        res.status(200).json({ message: "users found", users: getUsers });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(404).json({ message: "Error to get users", error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.getUserById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, getUser, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userService = tsyringe_1.container.resolve(userService_1.default);
                        return [4 /*yield*/, userService.getUserById(parseInt(req.params.id))];
                    case 1:
                        getUser = _a.sent();
                        res.status(200).json({ messae: "User found", user: getUser });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res.status(404).json({ message: "Error to get user", error: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, email, password, dataVerify, userService, createdUser, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                        dataVerify = util_1.default.verifyData(name_1, email, password);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesary all params name,email,password" });
                            return [2 /*return*/];
                        }
                        userService = tsyringe_1.container.resolve(userService_1.default);
                        return [4 /*yield*/, userService.postUser({ name: name_1, email: email, password: password })];
                    case 1:
                        createdUser = _b.sent();
                        if (!createdUser) {
                            res.status(400).json({ message: "User exists. Try again!" });
                            return [2 /*return*/];
                        }
                        res.status(201).json({ message: "Created user correctly", user: createdUser });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _b.sent();
                        res.status(400).json({ message: "Error to create user", error: error_3 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_2, email, password, dataVerify, userService, updatedUser, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_2 = _a.name, email = _a.email, password = _a.password;
                        dataVerify = util_1.default.verifyData(name_2, email, password);
                        if (!dataVerify) {
                            res.status(400).json({ message: "Is necesary all params name,email,password" });
                            return [2 /*return*/];
                        }
                        userService = tsyringe_1.container.resolve(userService_1.default);
                        return [4 /*yield*/, userService.updateUser(parseInt(req.params.id), { name: name_2, email: email, password: password })];
                    case 1:
                        updatedUser = _b.sent();
                        res.status(200).json({ message: "Updated user correctly", user: updatedUser });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _b.sent();
                        res.status(500).json({ message: "Error to update user", error: error_4 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserController.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userService = tsyringe_1.container.resolve(userService_1.default);
                        return [4 /*yield*/, userService.deleteUser(parseInt(req.params.id))];
                    case 1:
                        _a.sent();
                        res.status(200).json({ message: "Deleted user correctly" });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(500).json({ message: "Error to delete user", error: error_5 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;

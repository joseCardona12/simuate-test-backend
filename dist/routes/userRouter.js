"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController_1.default.getUsers);
userRouter.get("/:id", userController_1.default.getUserById);
userRouter.post("/", userController_1.default.createUser);
userRouter.put("/:id", userController_1.default.updateUser);
userRouter.delete("/:id", userController_1.default.deleteUser);
exports.default = userRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var authRouter = (0, express_1.Router)();
authRouter.post("/login", authController_1.default.loginUser);
authRouter.post("/register", authController_1.default.registerUser);
exports.default = authRouter;

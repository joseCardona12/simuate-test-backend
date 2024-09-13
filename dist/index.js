"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/container");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const util_1 = __importDefault(require("./utils/util"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,UPDATE, PUT",
    credentials: true
}));
const PORT = 3060;
app.use(express_1.default.json());
app.use("/api", routes_1.default);
util_1.default.startServer(app, PORT);

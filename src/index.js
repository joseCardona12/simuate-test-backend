"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/container");
var express_1 = require("express");
var routes_1 = require("./routes/routes");
var util_1 = require("./utils/util");
var cors_1 = require("cors");
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,UPDATE, PUT",
    credentials: true
}));
var PORT = 3060;
app.use(express_1.default.json());
app.use("/api", routes_1.default);
util_1.default.startServer(app, PORT);

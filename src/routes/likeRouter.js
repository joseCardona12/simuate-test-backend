"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var likeController_1 = require("../controllers/likeController");
var likeRouter = (0, express_1.Router)();
likeRouter.get("/", likeController_1.default.getLikes);
likeRouter.get("/:id", likeController_1.default.getLikeById);
likeRouter.post("/", likeController_1.default.createLike);
likeRouter.put("/:id", likeController_1.default.updateLike);
likeRouter.delete("/:id", likeController_1.default.deleteLike);
exports.default = likeRouter;

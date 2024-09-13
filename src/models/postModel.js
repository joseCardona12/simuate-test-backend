"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var userModel_1 = require("./userModel");
var likeModel_1 = require("./likeModel");
var Post = function () {
    var _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: "posts",
            timestamps: false
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = sequelize_typescript_1.Model;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _user_id_decorators;
    var _user_id_initializers = [];
    var _user_id_extraInitializers = [];
    var _likes_decorators;
    var _likes_initializers = [];
    var _likes_extraInitializers = [];
    var Post = _classThis = /** @class */ (function (_super) {
        __extends(Post_1, _super);
        function Post_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = __runInitializers(_this, _id_initializers, void 0);
            _this.title = (__runInitializers(_this, _id_extraInitializers), __runInitializers(_this, _title_initializers, void 0));
            _this.description = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _description_initializers, void 0));
            _this.user_id = (__runInitializers(_this, _description_extraInitializers), __runInitializers(_this, _user_id_initializers, void 0));
            _this.likes = (__runInitializers(_this, _user_id_extraInitializers), __runInitializers(_this, _likes_initializers, void 0));
            __runInitializers(_this, _likes_extraInitializers);
            return _this;
        }
        return Post_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Post");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_decorators = [sequelize_typescript_1.PrimaryKey, sequelize_typescript_1.AutoIncrement, (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER
            })];
        _title_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING(200),
                allowNull: false
            })];
        _description_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.TEXT,
                allowNull: false
            })];
        _user_id_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return userModel_1.default; }), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _likes_decorators = [(0, sequelize_typescript_1.HasMany)(function () { return likeModel_1.default; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: function (obj) { return "user_id" in obj; }, get: function (obj) { return obj.user_id; }, set: function (obj, value) { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _user_id_extraInitializers);
        __esDecorate(null, null, _likes_decorators, { kind: "field", name: "likes", static: false, private: false, access: { has: function (obj) { return "likes" in obj; }, get: function (obj) { return obj.likes; }, set: function (obj, value) { obj.likes = value; } }, metadata: _metadata }, _likes_initializers, _likes_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.default = Post;

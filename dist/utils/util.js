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
const db_1 = __importDefault(require("../config/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class Util {
    static startServer(app, PORT) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.authenticate(); // Intentar conectar con la base de datos
                console.log({ message: "Trying connect server" });
                yield db_1.default.sync(); // Sincroniza con la base de datos los modelos
                app.listen(PORT, () => console.log(`Server running on the port ${PORT}`));
            }
            catch (error) {
                console.log({ message: "Error with the method startServer" });
            }
        });
    }
    static verifyData(...fields) {
        return fields.every(field => field);
    }
    static encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            return hashedPassword;
        });
    }
    static verifyPassword(password, passwordSave) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.compare(password, passwordSave);
        });
    }
}
exports.default = Util;

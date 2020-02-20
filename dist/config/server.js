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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
class server {
    constructor() {
        this.port = process.env.PORT || 3001;
        this.app = express();
        this.settings__cors();
        this.settings__bodyparser();
        this.settings__routes();
    }
    settings__cors() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    ;
    settings__bodyparser() {
        this.app.use(bodyParser.json());
    }
    ;
    settings__routes() {
        this.app.use('/', (req, res) => {
            res.json({ succes: true, message: 'The server is active!' });
        });
    }
    ;
    run_server() {
        this.app.listen(this.port, () => {
            console.log(`The server is running in the port http://localhost:${this.port}/`);
        });
        typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
            console.log(" ========== Successful connection db ========== ");
        })).catch(error => { console.log("========== Failed connection db =========="); console.log(error); });
    }
    ;
}
exports.server = server;
;
//# sourceMappingURL=server.js.map
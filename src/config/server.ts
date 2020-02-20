import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {createConnection} from "typeorm";

export class server {
    public app: express.Application;
    public port:any = process.env.PORT || 3001;

    constructor(){
        this.app = express();
        this.settings__cors();
        this.settings__bodyparser();
        this.settings__routes();

    }

    settings__cors(){
        this.app.use((req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
          res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
          res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
          next();
        });
    };

    settings__bodyparser(){
        this.app.use(bodyParser.json())
    };

    settings__routes(){
        this.app.use('/', (req: Request, res: Response) => {
            res.json({succes: true, message: 'The server is active!'}) 
        })
    };

    run_server(){
        this.app.listen(this.port, () => { 
            console.log(`The server is running in the port http://localhost:${this.port}/`) 
        });

        createConnection().then(async connection => {
            console.log(" ========== Successful connection db ========== ")
        }).catch(error => {console.log("========== Failed connection db ==========");console.log(error)});
    };

};

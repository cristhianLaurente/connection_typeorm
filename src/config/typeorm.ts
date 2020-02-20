import {createConnection} from "typeorm";

export const connection = () => {}
createConnection().then(async connection => {

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));

import app from './app.js';
import mssql from "mssql";
import {getConnection} from "./database/connection.js"
getConnection();
app.listen(3000);
console.log("servidor iniciado");

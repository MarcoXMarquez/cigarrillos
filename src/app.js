import express from "express";
import mssql from "mssql";
import paisesRoutes from './routes/paises.routes.js';

const app = express();

app.use(express.json());
app.use(paisesRoutes);

export default app;

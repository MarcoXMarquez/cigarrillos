import { getConnection } from "../database/connection.js";
import mssql from "mssql";

export const getPaises = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query(
        'SELECT * FROM pais',(error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('../views/crud_pais.ejs', { resultado: results });
        }
    });
};

export const getPais = async (req, res) => {
    console.log(req.params.id)
    const pool = await getConnection()
    const result = await pool.request()
        .input('paisCod', mssql.Numeric, req.params.id)
        .query('SELECT * FROM pais WHERE paisCod = @paisCod');

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "pais no encontrado" });
    }
    return res.json(result.recordset[0]);
};

export const createPais = async (req, res) => {
    console.log(req.body);

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('paisCod', mssql.Numeric, req.body.paisCod)
        .input('paisNom', mssql.VarChar, req.body.paisNom)
        .query(
            "INSERT INTO pais (paisCod, paisNom) VALUES (@paisCod, @paisNom)"
        );
    console.log(result);
    res.json({
        paisCod: req.body.paisCod,
        paisNom: req.body.paisNom,
    });
};

export const updatePais = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request()
        .input("paisCod", mssql.Numeric, req.params.id)
        .input("paisNom", mssql.VarChar, req.body.paisNom)
        .query('UPDATE pais SET paisNom = @paisNom WHERE paisCod = @paisCod');
    
    console.log(result);

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "pais no encontrado" });
    }
    res.json("pais actualizado");
};

export const deletePais = async (req, res) => {
    console.log(req.params.id)
    const pool = await getConnection()
    const result = await pool.request()
        .input('paisCod', mssql.Numeric, req.params.id)
        .query('DELETE FROM pais WHERE paisCod = @paisCod');

    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({ message: "pais no encontrado" });
    }
    return res.json({ message: "pais eliminiado" });
};

import mssql from "mssql";
const connectionSettings={
    server: "DESKTOP-MAVOP9J\\SQLEXPRESS",
    database: "cigarrillos",
    user: "admin",
    password: "admin1234",
    port:1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export const getConnection= async()=>{
    try{
        const pool=await mssql.connect(connectionSettings)
        const result = await pool.request().query("SELECT * FROM pais");
        console.log(result.recordset);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}


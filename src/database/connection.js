
import mssql from "mssql";
const connectionSettings={
    server: "DESKTOP-MAVOP9J\\SQLEXPRESS",
    database: "cigarrillos",
    user: "admin",
    password: "admin1234",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export const getConnection= async()=>{
    try{
        const pool=await mssql.connect(connectionSettings);
        const result = await pool.request().query("SELECT * FROM pais");
        console.log(result);
        return pool;
    }
    catch(error){
        console.error(error);
    }
}


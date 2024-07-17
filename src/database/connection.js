import mssql from "mssql";

const connectionSettings = {
    server: "DESKTOP-FQEN2K1\\SQLEXPRESS",
    database: "cigarrillos",
    user: "admin",
    password: "admin1234",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

export const getConnection = async () => {
    try {
        const pool = await mssql.connect(connectionSettings);
        return pool;
    }
    catch (error) {
        console.error(error);
    }
}


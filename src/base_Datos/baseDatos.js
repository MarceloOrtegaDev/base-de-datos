const express = require('express');
const basedatos = express();


const mysql2 = require("mysql2/promise");
const newConnection = async () => {

    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "base_datonode" // Mi base de datos
    })

    return connection
}

module.exports = {
    newConnection
}

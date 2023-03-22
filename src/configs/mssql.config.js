const sql = require('mssql');

let server, port;

if (process.env.BRANCH == 1) {
    server = process.env.MSSQL_SERVER1;
    port = process.env.MSSQL_PORT1;
}

if (process.env.BRANCH == 2) {
    server = process.env.MSSQL_SERVER2;
    port = process.env.MSSQL_PORT2;
}

const sqlConfig = {
    user: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_DATABASE,
    server: server || process.env.MSSQL_SERVER,
    port: port || 1434,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}
const pool = new sql.ConnectionPool(sqlConfig);

pool.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
})


module.exports = pool;
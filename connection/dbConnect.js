const dbConfig = require('./dbConfig');
const sql = require('mssql/msnodesqlv8');

const dbConnect = new sql.connect(dbConfig,
    (err) => {
        if(err) log.error(err);
        else console.log(`Connection réussi sur le serveur : ${dbConfig.server}\\${dbConfig.database}`);
    }
    );

module.exports = dbConnect;
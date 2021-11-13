const sql = require('mssql/msnodesqlv8');
const dbConnect = require('./../connection/dbConnect');
const prefix = '/Fistule/'

const CompagnyRoutes = (app) => {
    app.get(`${ prefix }user`,
        (req ,res) => {
            let request = new sql.Request(dbConnect);
            request.query('',
            (err , result) => {
                if(err) console.log(err);
                else res.send(result);
            }
        );
    }
);

    app.get(`${ prefix }user/:id`,
    (req ,res) => {
        let request = new sql.Request(dbConnect);
        request.query('')

    }
);
}

module.exports = CompagnyRoutes;
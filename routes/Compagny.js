const sql = require("mssql/msnodesqlv8");
const dbConnect = require("./../connection/dbConnect");
const prefix = "/Fistule/";

const CompagnyRoutes = (app) => {
  app.get(`${prefix}user`, (req, res) => {
    let request = new sql.Request(dbConnect);
    request.query("SELECT * FROM [UserAccounts]", (err, result) => {
      if (err) console.log(err);
      else res.send(result.recordset);
    });
  });

  app.post(`${prefix}register`, (req, res) => {
    let body = req.body;
    let request = new sql.Request(dbConnect);
    request.query(
      `
        INSERT INTO  UserAccounts(
            Mail,
            Pseudo,
            Password
        ) VALUES(
            '${body.Mail}',
            '${body.Pseudo}',
            '${body.Password}'
            )`,
      (err, result) => {
        if (err) console.log(err);
        else res.send(result.rowsAffected);
      }
    );
  });



  app.post(`${prefix}check`, (req, res) => {
    let input = req.body;
    console.log(input);
    let request = new sql.Request(dbConnect);
    request.query(
      `SELECT UserID, Mail, Pseudo, '********'  Password FROM UserAccounts WHERE Mail = '${input.Mail}' AND Password = '${input.Password}'`, 
      (err, result) => {
        if (err) console.log(err);
        else res.send(result.recordset[0]);
      }
    );
  });

  app.get(`${prefix}user/:id`, (req, res) => {
    let request = new sql.Request(dbConnect);
    request.query("", (err, result) => {
      if (err) console.log(err);
      else res.send(result.recordset[0]);
    });
  });
};

module.exports = CompagnyRoutes;

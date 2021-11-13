const CompagnyRoutes  = require('./Compagny');

const appRoutes = (app) => {
    app.get('/',
    (req, res) => {
        let accueil = { 
            description : "Bienvenue sur le server de NewWorldsCompagny : http://localhost:5030",
        routes: 
            {
                Compagny  : "http://localhost:5030/NewWorldsCompagny",
                "URL localhost" : "http://localhost:5030/"
            }
        };
        res.send(accueil);
    }
  );
  CompagnyRoutes(app);
};

module.exports = appRoutes;
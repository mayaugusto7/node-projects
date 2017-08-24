var cliente = require('../models/cliente')();

module.exports = function(app) {

    app.get('/', function(req, res) {
        var listaClientes = cliente.all();

        res.render('site/home', {clientes: listaClientes});
    });
    
    app.get('/contato', function(req, res) {
         res.render('site/contato');
    });
}
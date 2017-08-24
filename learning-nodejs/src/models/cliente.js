var db = require('../../config/db');

module.exports = function() {

    this.all = function () {

        var con = db();
        
        var query = 'SELECT * FROM clientes';

        con.query(query, function(err, rows) {
            console.log(rows);
        });

        return [
            {
                "id": 1,
                "nome": "Maycon Ribeiro",
                "email": "maycon_ribeiro@hotmail.com"
            },

            {
                "id": 2,
                "nome": "Maycon Augusto",
                "email": "maycon_ribeiro@hotmail.com"
            }

        ];
    };

    return this;
};
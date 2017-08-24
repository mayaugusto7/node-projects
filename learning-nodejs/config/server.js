

//module.exports = app;
module.exports = function () {
 
    var express = require('express');
    
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
    
    //var rotas = require('../src/routes/web')(app);
    var rotas = require('../src/routes/web');
    rotas(app);
    
    app.listen(8000, function(){
        console.log('localhost:8000');
    });
}
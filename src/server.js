var express = require('express'),
    path = require('path'),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mangoose');
    config = require('./config/DB');
    coinRoutes = require('./expressRoutes/coinRoutes');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        () => {console.log('Database is connected')},
        err => {console.log('Can not connect to the database'+ err)}
        );

    const app = express();
    app.use(bodyparser.json());
    app.use(cors());
    app.use('/coins', coinRoutes);
    var port = process.env.PORT || 4000;

    var server = app.listen(function(){
        console.log(' Listening on port ' + port);
    });
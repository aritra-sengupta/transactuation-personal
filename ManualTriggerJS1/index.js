
var durls = {};

var documentdb = require('documentdb');
var config = require('./config');
var DocumentClient = documentdb.DocumentClient;
durls.client = new DocumentClient(config.endpoint,
  { "masterKey": config.primaryKey });
durls.databaseId = config.database;
durls.stateColId = config.collection.state;
durls.databaseUrl = `dbs/${config.database}`;
durls.stateColUrl = `${durls.databaseUrl}/colls/${config.collection.state}`;

module.exports = function (context, input) {
    context.log('JavaScript manually triggered function called with input:', input);

    var txcontext = {
    "home": "home1",
    "app": "app1",
    "tx": "app1_tx1",
    "parameters": { }
    };
   var sprocParams = txcontext;
   var sprocLink = durls.stateColUrl + "/sprocs/" + "app1";

    durls.client.executeStoredProcedure(sprocLink, sprocParams, function(err, results, responseHeaders) {
        console.log('//////////////////////////////////');
        if (err) {
            console.log('// err');
            console.log(err);
        }
        if (responseHeaders) {
            console.log('// responseHeaders');
            console.log(responseHeaders);
        }
        if (results) {
            console.log('// results');
            console.log(results);
        }
        console.log('//////////////////////////////////');
        context.done();
    });
    
};
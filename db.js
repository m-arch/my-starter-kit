/*eslint no-undef: "error"*/
/*eslint-env node*/

var Q = require('q');

//MongoDB client 
var MongoClient = require('mongodb').MongoClient;

//Setting up the mongo database
var state = {
    db: null,
    mode: null,
};

function connect(mode, done) {
    if (state.db) return done();
    
    var uri = null;
    switch(mode) {
    case process.env.PROD_ENV:
        uri = process.env.PROD_DB_URL;
        break;
    case process.env.TEST_ENV:
        uri = process.env.TEST_DB_URL;
        break;
    default:
        uri = process.env.DEV_DB_URL;
    }
    
    MongoClient.connect(uri, function(err, DB) {
        if (err){ 
            console.log('error: ' + err);
            done(err);
        }else{
            console.log('connected correctly to server db');
            state.db = DB;
            state.mode = mode;
            initCollections();
            done();
        }
    });
}


function getDB(){
    return state.db;
}

//-------------------------------------Creating collections------------//

var COLLECTIONS = ['users'];

function initCollections(){
    COLLECTIONS.forEach(function(coll){
        state.db.createCollection(coll, function(err){
            if(err) 
                console.log(err);
            else 
                console.log('successfully created collection: ' + coll);
        });
    });
}




module.exports = {
    connect: connect,
    getDB: getDB,
};

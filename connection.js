const { MongoClient } = require("mongodb");
const Db = "mongodb://admin:admin@svc.gksl2.cloudtype.app:32572/?authMechanism=DEFAULT";
// const Db = "svc.gksl2.cloudtype.app:31714";
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("myFirstDatabase");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },
    getDb: function () {
        return _db;
    },
};

// const { MongoClient } = require('mongodb');

// const uri = "mongodb://admin:admin@svc.gksl2.cloudtype.app:32572/?authMechanism=DEFAULT";
// const client = new MongoClient(uri);
// try {
//     client.connect();
//     // listDatabases(client);

//     // New Collection
//     const collection = connect.createCollection("GFG");
  
//     console.log("collection created : ", collection);
// } catch (e) {
//     console.error(e);
// }

// const MongoClient = require("mongodb");
// const url = 'mongodb://admin:admin@svc.gksl2.cloudtype.app:32572/?authMechanism=DEFAULT';
// const databasename = "admin"; // Database name 
  
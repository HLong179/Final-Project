var mysql = require('mysql');
exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
           host: 'sql3.freemysqlhosting.net',
            port: 3306,
            user: 'sql3245172',
            password: '9xZW9l5v3F',
            database: 'sql3245172',
            //insecureAuth: true
        });


        cn.connect();

        cn.query(sql, function(error, rows, fields) {
            if (error) {
            	reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'sql3.freemysqlhosting.net',
            port: 3306,
            user: 'sql3245172',
            password: '9xZW9l5v3F',
            database: 'sql3245172',
            insecureAuth: true
        });

        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}


// var mongodb = require('mongodb');

// //We need to work with "MongoClient" interface in order to connect to a mongodb server.
// var MongoClient = mongodb.MongoClient;

// // Connection URL. This is where your mongodb server is running.
// var url = 'mongodb://localhost:27017/store';

// // Use connect method to connect to the Server
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     //HURRAY!! We are connected. :)
//     console.log('Connection established to', url);

//     // do some work here with the database.

//     //Close connection
//     db.close();
//   }
// });

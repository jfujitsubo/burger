var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection ({
        host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'rxc15h2zl7fd9me23',
        password: 'vcin22cu99hisnlh',
        database: 'eoxcatrp9omp64vf'
    });
};

/*var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'psp123!!',
    database: "burgers_db"
});*/

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' +  connection.threadId);

});

module.exports = connection;


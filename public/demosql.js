var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'wgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'x5xhg901hjefvq0u',
    password: 'ixcckomsi3ojkt7a'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});



   connection.query('INSERT INTO contacts (uid, cname, phone) VALUES (1, ' + cname + ', ' + cphone + ')', function(error, results, fields) {
    	console.log(err);

    });



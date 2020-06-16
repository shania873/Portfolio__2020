const express = require('express');
const path = require('path'); 
var mysql = require('mysql');
const app = express();

const port = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database :'portfolio_caro'
});
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};


db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio_caro'
})



connection.connect();

var server = {
  port: 4040
};

app.use(express.static(DIST_DIR),function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get('/api', (req, res) => {  
  db.query(`SELECT * FROM travaux_global`, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
});



app.get('/projets/:id', (req, res) => {
  db.query('SELECT * FROM travaux_global WHERE id_travaux = ?', [req.params.id], (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); 
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});


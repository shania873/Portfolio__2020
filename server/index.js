const express = require('express');
const path = require('path'); // NEW
var mysql = require('mysql');
const app = express();

const port = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
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

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio_caro'
})



connection.connect();
// make server object that contain port property and the value for our server.
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


// get user lists
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




// app.use(express.static(DIST_DIR)); // NEW
// app.get('/api', (req, res) => {
//   res.send(mockResponse);
//   console.log(mockResponse);
// });
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});

// app.get('*', (req, res) => {
//   const innerContent = renderToString(<App pathname={req.url} />);

//   const html = renderToStaticMarkup(<Html innerContent={innerContent} />);

//   res.send(`<!DOCTYPE html>${html}`);
// });
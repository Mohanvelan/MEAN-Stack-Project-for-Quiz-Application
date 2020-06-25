const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();
const path = require('path');
const route = require('./route/route');

const connection = mysql.createConnection({
  host: 'localhost',  user : 'root',  password :'', database: 'mydb'
});
connection.connect();

/*mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected',() => {
   console.log('Mongodb is listening at port 27017...');
});
mongoose.connection.on('error',() => {
   console.log('Database couldn\'t connect...');
});*/

app.use(cors());
app.use(bodyParser.json());
app.use(route(connection));

app.use(express.static(__dirname + '/dist/QuizProj'));
app.get('*',(req, res) => {
   res.sendFile(path.join(__dirname,'dist/QuizProj/index.html'));
});

app.get('/',(req,res) => {
   res.send('user authencation...');
})

app.listen(4201);

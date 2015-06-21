'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.sqlite3');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var currentUser = -1;

var users = [];
getUsers();

app.get('/checkUser'), function(req, res){
  var log = req.query.login;
  var pass = req.query.password;
  for(i in users){
    console.log(cos[i].login);
    if(users[i].login == log && users[i].pass == pass){
      currentUser=i;
      break;
    }
    else res.send('{"ERROR":"Zly login lub haslo"}');
  }
}

app.get('/signUp'), function(req, res){
  var log = req.query.login;
  var pass = req.query.password;
  var mail = req.query.email;
  var favPage = req.query.favPage
  setUsers(res, log, pass, mail, favPage);
  console.log(res);
  getUsers();
}


app.get('/signOut'), function(req, res){
  currentUser=-1;
}

function getUsers() {
  var run = db.all("SELECT id, login, pass, email, favPage FROM Users", function(err, rows) {
      console.log(JSON.stringify(rows));
      users = JSON.stringify(rows);
  });
}

function setUsers(res, login, pass, email, favPage) {
  var stmt = db.prepare("INSERT INTO Users (login, pass, email, favPage) VALUES (?, ?, ?, ?)");
  stmt.run(login, pass, email, favPage, function(err, row){
    console.log(JSON.stringify(row));
    if(err) res.json({Ans:"NO"});
    else res.json({Ans:"OK"});
  });
}

function delUsers(res, id) {
      var stmt = db.prepare("Delete From Users WHERE id = ?");
      stmt.run(id, function(err, rows){
        console.log(JSON.stringify(rows));
        if(err) res.json({Ans:"NO"});
        else res.json({Ans:"OK"});
      });

}

/*
app.get('/api/get', function(req, res){
  var act = req.query.t;
  if(act == "g") {
    data.getGroups(res);
  } else if(act == "h") {
    if(req.query.id){
      data.getHosts( res, req.query.id);
    } else res.send('{"ERROR":"potrzebne ID"}');
  }
  else {
    res.send('{"ERROR":"Brak danych"}');
  }
});

app.get('/api/ins', function(req, res){
  var act = req.query.t;
  if(act == "g") {
    if(req.query.n) data.setGroup(res, req.query.n);
    else  res.send('{"ERROR":"potrzebna nazwa grupy"}');
  }
  else if(act == "h") {
    if(req.query.id && req.query.n && req.query.ip)
      data.setHost(res, req.query.id, req.query.n, req.query.ip);
    else res.send('{"ERROR":"potrzebne dane do wstawienia"}');
  }
  else res.send('{"ERROR":"Brak danych"}');
});

app.get('/api/alt', function(req, res){
  var act = req.query.t;
  if(act == 'g'){
    if(req.query.n && req.query.id){
      data.altGroup(res, req.query.id, req.query.n);
    }
    else res.json('"Error":"brak danych do zmiany"');
  }
});

app.get('/api/del', function(req, res){
  var act = req.query.t;
  if(act == 'g'){
    if(req.query.id){
      data.delGroup(res,  req.query.id);
    }
    else res.json('"Error":"brak id do usunięcia"');
  }
  else if(act == 'h'){
    if(req.query.id){
      data.delHost(res, req.query.id);
    }
    else res.json('"Error":"brak id do usunięcia"');
  }
});*/



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});

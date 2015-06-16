'use strict'

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./data.sqlite3');

exports.getUsers = function(users) {
  var run = db.all("SELECT id, login, pass, email, favPage FROM Users", function(err, rows) {
      console.log(JSON.stringify(rows));
      users = JSON.stringify(rows);
  });
}


exports.setUser = function(res, login, pass, email, favPage) {
  var stmt = db.prepare("INSERT INTO Users (login, pass, email, favPage) VALUES (?, ?, ?, ?)");
  stmt.run(login, pass, email, favPage, function(err, row){
    console.log(JSON.stringify(row));
    if(err) res.json({Ans:"NO"});
    else res.json({Ans:"OK"});
  });
}

exports.delUser = function(res, id) {
      var stmt = db.prepare("Delete From Users WHERE id = ?");
      stmt.run(id, function(err, rows){
        console.log(JSON.stringify(rows));
        if(err) res.json({Ans:"NO"});
        else res.json({Ans:"OK"});
      });

}

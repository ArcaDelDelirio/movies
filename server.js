
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

users = [{"id":1, "name":"fulanito", "age":20},{"id":2, "name":"Menganita", "age": 33}];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id == userId);
  res.json(user);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

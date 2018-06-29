let express = require('express');
let bodyParser = require('body-parser');

// ES6 object destructuring of mongoose
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

// Configure port
let port = process.env.PORT || 3000;

// configure middleware
app.use(bodyParser.json());

// resource creation
app.post('/todos', (req, res) => {
  console.log(req.body);
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});



app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};

// Object Destructuring to get MongoClient and ObjectID
const {MongoClient, ObjectID} = require('mongodb');

// connect to database
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  // handle error
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // todo collection, and user collection
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "James Stafford-Coyte",
  //   age: 30,
  //   location: 'Vancouver'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  //close connection with MongoDB server
  db.close();
});

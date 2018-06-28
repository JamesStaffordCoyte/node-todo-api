// Object Destructuring to get MongoClient and ObjectID
const {MongoClient, ObjectID} = require('mongodb');

// connect to database
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  // handle error
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "James Stafford-Coyte"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });
  //close connection with MongoDB server
  db.close();
});

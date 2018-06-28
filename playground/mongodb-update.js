// Object Destructuring to get MongoClient and ObjectID
const {MongoClient, ObjectID} = require('mongodb');

// connect to database
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  // handle error
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate(filter, update, options, callback) - returns a promise
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b3457bdb298dbc777b5cb65")
  // }, {
  // // use Mongodb Operators $set
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(`Updated '${result.value.text}' to '${result.value.completed}'`);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b3154f3f160b34ab912f1e7")
  }, {
  // use Mongodb Operators $set
    $set: {
      name: "James"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(`Updated 'age' to '${result.value.age}' and 'name' to '${result.value.name}'`);
  });

  //close connection with MongoDB server
  db.close();
});

// Object Destructuring to get MongoClient and ObjectID
const {MongoClient, ObjectID} = require('mongodb');

// connect to database
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  // handle error
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete Many
  // db.collection('Todos').deleteMany({text: 'Have lunch'}).then((result) => {
  //   console.log(result.result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Have lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(`You have deleted the task: '${result.value.text}'`);
  // });

  db.collection('Users').deleteMany({name: "James Stafford-Coyte"}).then((result) => {
    console.log(result.result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b344225596df905d0fac5ef")}).then((result) => {
    console.log(`You have deleted User: '${result.value.name}' from the database`);
  });

  //close connection with MongoDB server
  db.close();
});

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result.deletedCount);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name:'Gigi Corbetta'}).then((result) => {
    console.log(result.deletedCount);
  });

  db.collection('Users').findOneAndDelete({_id:new ObjectID("5aca8f142fcbc4429c57432b")}).then((result) => {
    console.log(result);
  })
  //client.close();
});

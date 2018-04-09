//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id:new ObjectID("5acafc2685b4a5cef2c93f7e")
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos counts: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })
  db.collection('Users').find({name: 'Gigi Corbetta'}).toArray().then((docs) => {
    console.log("Todos");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  })

  //client.close();
});

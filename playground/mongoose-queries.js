const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5acbca409c395f048071649a123';
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('TodoID', todo);
// }).catch((e) => console.log(e));

var id = '5acb749647150f4ac82cc551';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User:', user);
}).catch((e) => console.log(e));

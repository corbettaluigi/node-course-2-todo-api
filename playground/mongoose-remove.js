const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all todos matching criteria. With empty query remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//remove the firs element matching criteria
//Todo.findOneAndRemove();

Todo.findByIdAndRemove('5acdb7124b00e846e0c2fec6').then((doc) => {
  if(!doc) {
    return console.log('nothing to delete');
  }
  console.log(doc);
}).catch((e) => console.log('ERROR'));

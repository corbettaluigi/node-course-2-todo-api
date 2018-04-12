const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// if (process.env.PORT) {
//   var dbUri = 'mongodb://lcdbuser:lc123db@ds121534.mlab.com:21534/lcdb';
// } else {
//   var dbUri = 'mongodb://localhost:27017/TodoApp';
// }

var dbUri = process.env.DBURI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(dbUri);

module.exports = {mongoose};

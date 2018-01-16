const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5a5e048d2a18962b5cd1469811';
var Id = '5a5775e9b082c920f4ac9ec4'

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id ', todo);
// }).catch((e) => console.log(e));

User.find({
    _id: Id
}).then((users) => {
    console.log('Users', users);
});

User.findOne({
    _id: Id
}).then((user) => {
    console.log('User', user);
});

User.findById(Id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});


  






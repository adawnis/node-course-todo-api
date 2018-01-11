// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server', err);
}
console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5a572be17ae5a9b8f7e2e31f")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Mike'
    }, {
        $set: {
            name: 'Lee'
        },
        $inc: {
            age: +5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); 

// db.close();
});
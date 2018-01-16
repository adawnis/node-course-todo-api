
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server', err);
}
console.log('Connected to MongoDB server');

// db.collection('Teachers').insertOne({
//     name: 'Favour Jude',
//     gender: 'Female',
//     age: 20
// });
// db.collection('Teachers').insertOne({
//     name: 'Rose Charity',
//     gender: 'Female',
//     age: 21
// });
// db.collection('Teachers').insertOne({
//     name: 'Ola Olu',
//     gender: 'Male',
//     age: 25
// });
// db.collection('Teachers').insertOne({
//     name: 'Favour Jude',
//     gender: 'Female',
//     age: 20
// });
// db.collection('Teachers').insertOne({
//     name: 'Mike Ojelua',
//     gender: 'Male',
//     age: 24
// });
// db.collection('Teachers').insertOne({
//     name: 'Peace Okocha',
//     gender: 'Female',
//     age: 22
// });
// db.collection('Teachers').insertOne({
//     name: 'Joy innocent',
//     gender: 'Female',
//     age: 18
// });
db.collection('Teachers').insertMany(
    [
        {
            name:'fifi',
            age:45,
            gender: 'transgender'
        },
        {
            name:'banky',
            age:60,
            gender:'male'
        }
    ]
);

// db.collection('Teachers').find({name: 'Mike Ojelua'}).toArray().then((docs) => {
//     console.log('Teachers');
//     console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
//     console.log('Unable to fetch teacher', err)
// });

// db.close();
});
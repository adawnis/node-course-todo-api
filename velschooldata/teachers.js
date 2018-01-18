
const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server', err);
}
console.log('Connected to MongoDB server');
    
    
    if (command === 'list') {
        db.collection('Teachers').find().toArray().then((docs) => {
            console.log('Fetching teachers...')
            console.log(JSON.stringify(docs, undefined, 2))
        }, (err) => {
            console.log('Unable to fetch all teachers', err);
        });
    } else if(command === 'add') {
        db.collection('Teachers').insertOne({
            name: argv.name,
            gender: argv.gender,
            age: argv.age
        }, (err) => {
            console.log('Unable to add Teacher', err)
        });
    } else if (command === 'delete') {
        db.collection('Teachers').findOneAndDelete({
            name: argv.name
        }).then((result) => {
            console.log(result);
        })
    } else if (command === 'update') {
        db.collection('Teachers').findOneAndUpdate({
            name: argv.name
        }, {
            $set: {
                name: argv.newName,
                gender: argv.newGender,
                age: argv.newAge
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result)
        });
    }
    else{
        console.log('Invalid')
    }

// db.close();
});
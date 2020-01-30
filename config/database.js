const mongoose = require('mongoose');
const  localDb = 'mongodb://localhost/customers'

mongoose.connect(localDb || process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected', function (){
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});
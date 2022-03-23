const path = require('path');

const mongoose = require('mongoose');

const express = require('express');
const app = express();

const db="mongodb+srv://hundredthousand111:Club99163@cluster0.e8tsz.mongodb.net/identitymod?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},
    function (err) {
        if (err) {
            console.error('Error')
        } else {
            console.log('Connect Live MongoDB')
        }
    });

//configuration
//path.join('m','n') join two paths
// __dirname return the current path directory or directory of the current executing file 
// set(name,value) it is used to setting name to the value
app.set('views',path.join(__dirname,'views'));

// we don't have to include ejs express does it internally
// the template engine to use ejs there are other pug ,jade , mustache
// ejs is a template engine that works with express
app.set('view engine','ejs');//setting name=view engine and value= ejs;

// accepting data from frontend
// question use is use to invoke the funciton  or it is for use of the functions
app.use(express.json());




const myRoutes = require('./routes/app');//bringing the app.js file here in index.js
app.use(myRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening on port');
});
// it will listen to the port and log the value to it.
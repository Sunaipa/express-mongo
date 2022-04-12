const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRouter = require('./routes/user-route');

app.use('/user', userRouter);

// Connexion à mongoDB et lancement du serveur
//      Si la connexion est effective
mongoose.connect( 
    'mongodb://localhost:27017/formation',
    { useNewUrlParser: true }
)
.then(
    app.listen(3000, ()=> {
            console.log('Server ... Started with mongoose against python');
    })
).catch(err => console.log(err));


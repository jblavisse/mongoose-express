const express = require('express');
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const usersRouter = require('./routes/usersRouter.js');
const cardsRouter = require('./routes/cardsRouter.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

mongoose.connect('mongodb://localhost:27017/facebook',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',() => console.log('Erreur lors de la connexion'));
db.once('open',() => {
    console.log("Base de données dispo!");

    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })
})
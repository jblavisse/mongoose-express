const express = require("express");
const router = express.Router();
const Card = require("../models/card");

router.get('/', (req, res) => {
    // let card = new Card({
    //    title: "My card 2",
    //    description: "Lorem ipsum" 
    // })
    // card.save((err) => {
    //     if (err) throw new Error(err);
    //     res.send('Card saved!');
    // })

    Card.find({}, (err,cards) => {
        if(err) throw new Error(err);
        res.send(cards);
    })
})

module.exports = router;
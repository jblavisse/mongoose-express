const express = require("express");
const router = express.Router();
const Card = require("../models/card");

router.get('/', (req, res) => {
    Card.find({}, (err,cards) => {
        if(err) res.status(400).send(err);
        else res.send(cards);
    })
})

router.get('/:id', (req, res) => {
    Card.findById(req.params.id, (err, card) => {
        if(err) res.status(400).send(err);
        else res.send(card);
    })
})

router.delete('/:id',(req, res) => {
    Card.findByIdAndRemove(req.params.id, (err, card) => {
        if(err) res.status(400).send(err);
        else res.send(card);
    })
})

router.post('/', (req, res) => {
    // let card = new Card({
    //     title: "Card 3",
    //     description: "Lorem ipsum" 
    //  })
    //  card.save((err) => {
    //      if (err) res.status(400).send(err);
    //      else res.send(card);
    //  })
})

module.exports = router;
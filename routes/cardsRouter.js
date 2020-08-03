const express = require("express");
const router = express.Router();
const Card = require("../models/card");

router.get('/', (req, res) => {
    Card.find({})
    .populate('user')
    .exec((err,cards) => {
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
    let card = new Card(req.body);
    card.user = "5f27d7c056bd980c15bad548";
    card.save((err) => {
         if (err) res.status(400).send(err);
         else res.send(card);
     })
})

router.put('/:id', (req,res) => {
    Card.findByIdAndUpdate(req.params.id,req.body,(err, card) => {
        if(err) res.status(400).send(err);
        else Card.findById(card.id, (err, updatedCard) => {
            if(err) res.status(400).send(err);
            else res.send(updatedCard);
        });
    });
})

module.exports = router;
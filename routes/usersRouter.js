const express = require("express");
const router = express.Router();
const User = require('../models/user.js');


router.get('/', (req, res) => {
    User.find({}, (err, datas) => {
        if(err) throw new Error(err);
        res.send(datas);
    })
})

router.post('/', (req,res) => {
    let user = new User(req.body);
    user.save((err) => {
         if (err) res.status(400).send(err);
         else res.send(user);
     })
})


module.exports = router;
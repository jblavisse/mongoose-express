const express = require("express");
const router = express.Router();
const User = require('../models/user.js');


router.get('/', (req, res) => {
    User.find({}, (err, datas) => {
        if(err) throw new Error(err);
        res.send(datas);
    })
})

module.exports = router;
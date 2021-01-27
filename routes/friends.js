'use strict';

const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', function (req, res) {
    let htmlData = `<ul>`;    
    friendsArray.map((friend) => {
        htmlData += `<li>${friend.name}</li>`
    })
    htmlData += `</ul>`;
    res.send(htmlData);

    res.send('This will be a friends list.');
});

router.get('/:handle', (req, res) => {
    const { handle } = req.params;
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        }
    });
    console.log(friend);
    res.send(`<h1>Hi ${friend.name}</h1>`);
})

module.exports = router;
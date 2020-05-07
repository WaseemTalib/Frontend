const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Topic = require('../schemas/topicSchema');
const JWT = require('../middlewares/jwtAuth');

router.post('/register', JWT,async (req, res) => {
    try {
        const { name, image, description } = req.body;
        const data = { _id: new mongoose.mongo.ObjectId(), name: name, image: image, description: description };
        var exists = await Topic.findByName(name);
        if (!exists) {
            await Topic.create(data);
            res.json({ topic: data });
        } else res.json({ error: 'Topic with same name already existss' });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/topics', async (req, res) => {
    try {
        var topics = await Topic.getAllTopics();
        if (!topics) topics = [];
        res.json({ topics: topics });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

module.exports = router;
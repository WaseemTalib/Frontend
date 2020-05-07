const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Feed = require('../schemas/feedSchema');
const Comment = require('../schemas/commentSchema');
const User = require('../schemas/userSchema');
const JWT = require('../middlewares/jwtAuth');

router.post('/register', JWT, async (req, res) => {
    try {
        const { topicId, postedBy, url, feed } = req.body;
        const data = { _id: new mongoose.mongo.ObjectId(), topicId: topicId, postedBy: postedBy, url: url, feed: feed };
        await Feed.create(data);
        var feedD = await Feed.findOne({ _id: mongoose.Types.ObjectId(data._id) }).populate({ path: 'postedBy', model: 'users', select: { _id: 1, image: 1, name: 1 } }).populate({ path: 'topicId', model: 'topics', select: { _id: 1, name: 1 } });
        res.json({ feed: feedD });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/addComment', async (req, res) => {
    try {
        const { postedBy, comment, feedId } = req.body;
        const data = { _id: new mongoose.mongo.ObjectId(), postedBy: postedBy, comment: comment, feedId: feedId };
        var p1 = Comment.create(data);
        var p2 = Feed.insertComment(feedId, data._id);
        [crt1, crt2] = [await p1, await p2];
        var comm = await Comment.findOne({ _id: mongoose.Types.ObjectId(data._id) }).populate({ path: 'postedBy', model: 'users', select: { _id: 1, image: 1, name: 1 } });
        res.json({ comment: comm });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/delComment', async (req, res) => {
    const { commentId, feedId } = req.body;
    try {
        await Feed.deleteComment(feedId, commentId);
        res.json({ success: true });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/feeds', async (req, res) => {
    const { limit } = req.query;
    try {
        var feeds = await Feed.getAllFeeds(limit);
        if (!feeds) feeds = [];
        res.json({ feeds: feeds });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/auth/feeds', JWT, async (req, res) => {
    const { limit, _id } = req.query;
    try {
        var topics = await User.getTopics(_id);
        topics = topics.topic_follow;
        var feeds = await Feed.getAllFeedsAuth(limit, topics);
        if (!feeds) feeds = [];
        res.json({ feeds: feeds });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.get('/comments/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        var comments = await Feed.getCommentsByFeedId(_id);
        if (!comments) comments = [];
        res.json({ comments: comments });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

module.exports = router;
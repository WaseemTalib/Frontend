const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../schemas/commentSchema');
const Reply = require('../schemas/replySchema');
const JWT = require('../middlewares/jwtAuth');

router.get('/replies/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        var replies = await Comment.getRepliesByCommentId(_id);
        if (!replies) replies = [];
        res.json({ replies: replies });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/addReply', async (req, res) => {
    const { postedBy, comment, commentId } = req.body;
    try {
        const data = { _id: new mongoose.mongo.ObjectId(), postedBy: postedBy, comment: comment, commentId: commentId };
        var p1 = Reply.create(data);
        var p2 = Comment.insertReply(commentId, data._id);
        [crt1, crt2] = [await p1, await p2];
        var rep = await Reply.findOne({ _id: mongoose.Types.ObjectId(data._id) }).populate({ path: 'postedy', model: 'users', select: { _id: 1, name: 1, image: 1 } })
        res.json({ reply: rep });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/delReply', async (req, res) => {
    const { replyId, commentId } = req.body;
    try {
        Comment.deleteReply(commentId, replyId);
        res.json({ success: true });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

module.exports = router;
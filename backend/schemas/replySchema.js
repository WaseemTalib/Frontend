const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReplySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    comment: { type: String, required: true },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'comments' }
});

module.exports = Reply = mongoose.model("replies", ReplySchema, "replies");
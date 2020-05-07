const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    comment: { type: String, required: true },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'replies' }],
    feedId: { type: mongoose.Schema.Types.ObjectId, ref: 'feeds' }
});

CommentSchema.statics.getRepliesByCommentId = async (_id) => {
    const comments = Comment.findOne({ '_id': mongoose.Types.ObjectId(_id), isReply: false }, { replies: 1 }).
        populate({
            path: 'replies', model: 'replies', select: { _id: 1, postedBy: 1, comment: 1 },
            populate: { path: 'postedBy', model: 'users', select: { _id: 1, name: 1, image:1 }}
        });
    return comments;
}

CommentSchema.statics.insertReply = async (_id, replyId) => {
    const upt = await Comment.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { '$push': { replies: replyId } });
    return upt;
}

CommentSchema.statics.deleteReply = async (_id, replyId) => {
    const upt = await Comment.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { '$pull': { 'replies': replyId } });
    return upt;
}

CommentSchema.statics.deleteComment = async (_id) => {
    const del = await Comment.collection.deleteOne({ '_id': mongoose.Types.ObjectId(_id) });
    return del;
}

module.exports = Comment = mongoose.model("comments", CommentSchema, "comments");
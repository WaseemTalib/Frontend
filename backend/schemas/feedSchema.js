const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FeedSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'topics' },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    url: { type: String, default: '' },
    feed: { type: String, default: '' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }],
    posted: { type: Date, default: Date.now }
});

FeedSchema.statics.getAllFeeds = async (limit) => {
    var lim = Number(limit) * 20;
    const feeds = Feed.find({}).sort({ _id: -1 }).populate({ path: 'postedBy', model: 'users', select: { _id: 1, image: 1, name: 1 } }).populate({ path: 'topicId', model: 'topics', select: { _id: 1, name: 1 } }).sort({ _id: -1 }).skip(lim).limit(20);
    return feeds;
}

FeedSchema.statics.getAllFeedsAuth = async (limit, topics) => {
    var lim = Number(limit) * 20;
    const feeds = Feed.find({ topicId: { $in: topics } }).populate({ path: 'postedBy', model: 'users', select: { _id: 1, image: 1, name: 1 } }).populate({ path: 'topicId', model: 'topics', select: { _id: 1, name: 1 } }).sort({ _id: -1 }).skip(lim).limit(20);
    return feeds;
}

FeedSchema.statics.getCommentsByFeedId = async (_id) => {
    const comments = Feed.findOne({ '_id': mongoose.Types.ObjectId(_id) }, { comments: 1 }).populate({ path: 'postedBy', model: 'users', select: { _id: 1, name: 1, image: 1 } })
        .populate({ path: 'topicId', model: 'topics', select: { _id: 1, name: 1 } }).
        populate({ path: 'comments', model: 'comments', select: { _id: 1, postedBy: 1, comment: 1 }, populate: { path: 'postedBy', model: 'users', select: { _id: 1, image: 1, name: 1 } } });
    return comments;
}

FeedSchema.statics.insertComment = async (_id, commentId) => {
    const upt = await Feed.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { '$push': { 'comments': commentId } });
    return upt;
}

FeedSchema.statics.deleteComment = async (_id, commentId) => {
    const upt = await Comment.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { '$pull': { 'comments': commentId } });
    return upt;
}

module.exports = Feed = mongoose.model("feeds", FeedSchema, "feeds");
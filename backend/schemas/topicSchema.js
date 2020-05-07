const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }]
});

TopicSchema.statics.getAllTopics = async () => {
    const topics = await Topic.find({});
    return topics;
}

TopicSchema.statics.findByName = async (name) => {
    const isExist = await Topic.findOne({ name: { '$regex': `^${name}$`, '$options': 'i' } }, { 'name': 1 });
    if(!isExist) return false;
    return true;
};

module.exports = Topic = mongoose.model("topics", TopicSchema, "topics");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
});

VerSchema.statics.findVerById = async (userId) => {
    const ifMatch = await VerSchema.findOne({ 'userId': mongoose.Types.ObjectId(userId) });
    if (ifMatch) return true;
    return false;
}

VerSchema.statics.updateVerificationText = async (userId, text) => {
    const upt = await VerSchema.findOne({ 'userId': mongoose.Types.ObjectId(userId) }, { $set: { 'text': text } });
    return upt;
}

VerSchema.statics.compareVerificationText = async (userId, text) => {
    const ifMatch = await VerSchema.findOne({ 'userId': mongoose.Types.ObjectId(userId), 'text': text });
    if (ifMatch) return true;
    return false;
}

module.exports = Topic = mongoose.model("vers", VerSchema, "vers");
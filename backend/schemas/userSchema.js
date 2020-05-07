const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

// Create Schema
const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    last_Name: { type: String, default: '' },
    image: { type: String, default: '' },
    phone: { type: String, default: '' },
    fb: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    google: { type: String, default: '' },
    Country: { type: String, default: '' },
    education: { type: String, default: '' },
    job: { type: String, default: '' },
    verified: { type: String, default: false },
    followedby: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    topic_follow: [{ type: mongoose.Schema.Types.ObjectId, ref: 'topics' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'msgs' }],
    ebooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ebooks' }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
    firstSignup: { type: Boolean, default: true }
});

//Store Encrypted Password When Creating Account
UserSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) user.password = await bcrypt.hash(user.password, 10);
    next();
});

//Generate JWT Token
UserSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id, name: user.name }, process.env.SECRET, { expiresIn: '30d' });
    return token;
};

//Find using email and check if the password matched
UserSchema.statics.findUserByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email });
    if (!user) throw new Error({ error: 'Invalid login credentials' });
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) throw new Error({ error: 'Invalid login credentials' });
    return user;
};

UserSchema.statics.findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

UserSchema.statics.getTopics = async (_id) => {
    const user = await User.findOne({ _id: mongoose.Types.ObjectId(_id) }, { topic_follow: 1 });
    return user;
};

UserSchema.statics.findUserById = async (_id) => {
    const user = await User.findOne({ '_id': mongoose.Types.ObjectId(_id) }).populate({ path: 'topic_follow', model: 'topics', select: { _id: 1, name: 1 } });
    return user;
};

UserSchema.statics.updateVerified = async (_id) => {
    const upt = await User.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { $set: { verified: true } });
    return upt;
}

UserSchema.statics.updateTopics = async (_id, topics) => {
    const upt = await User.collection.updateOne({ '_id': mongoose.Types.ObjectId(_id) }, { $set: { topic_follow: topics, firstSignup: false } });
    return upt;
}

module.exports = User = mongoose.model("users", UserSchema, "users");
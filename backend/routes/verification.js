const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Verification = require('../schemas/verSchema');
const User = require('../schemas/userSchema');
const Random = require('randomstring');
const JWT = require('../middlewares/jwtAuth');

router.post('/sendMail', JWT, async (req, res) => {
    try {
        const { userId, email } = req.body;
        var transporter = nodeMailer.createTransport({ service: 'gmail', auth: { user: 'abdulhaadirao@gmail.com', pass: process.env.EPASS } });
        var code = Random.generate(6);
        var mailOptions = { from: 'abdulhaadirao@gmail.com', to: email, subject: 'Email verification code', text: code };
        var ver = await Verification.findVerById(userId);
        if (ver) var updateText = await Verification.updateVerificationText(userId, code);
        else {
            var data = { _id: new mongoose.mongo.ObjectId(), userId: userId, text: code };
            var createText = await Verification.create(data);
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) { console.log(error); return res.json({ error: 'Mail not sent' }); }
            return res.json({ success: true });
        });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

router.post('/verifyUser', JWT, async (req, res) => {
    const { userId, text } = req.body;
    try {
        var compare = await Ver.compareVerificationTextt(userId, text);
        if (!compare) return res.json({ error: 'incorrect code' });
        await User.updateVerified(userId);
        var user = await User.findUserById(userId);
        if (!user) return res.json({ error: 'User profile not found' });
        res.json({ user: user });
    } catch{ res.json({ error: 'Somthing unexpected occured' }); }
});

module.exports = router;
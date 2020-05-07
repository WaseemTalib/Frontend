const Account = require('./account');
const Topic = require('./topics');
const Feed = require('./feed');
const Comment = require('./comment');

module.exports = function (app) {
    app.use('/api/account', Account);
    app.use('/api/topic',Topic);
    app.use('/api/feed',Feed);
    app.use('/api/comment',Comment)
}
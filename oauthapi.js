const { OAuth } = require('oauth')
const {
    CONSUMER_KEY,
    SECRET_KEY,
    USER_TOKEN, 
    USER_SECRET,
} = require('./keys')

const oauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    CONSUMER_KEY,
    SECRET_KEY,
    '1.0A',
    null,
    'HMAC-SHA1'
)

const getTimelineTweet = (req, res) => {
    oauth.get(
        'https://stream.twitter.com/1.1/statuses/filter.json?track=twitter',
        USER_TOKEN,
        USER_SECRET,          
        function (error, data) {
            if (error) console.log(error)
            else console.log(data)
        });
}

module.exports = {
    getTimelineTweet
}
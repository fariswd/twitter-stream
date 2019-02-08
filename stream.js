const TwitterStream = require('twitter-stream-api')
const { Writable } = require('stream')

const keys = require('./keys')

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
    track: 'javascript'
});

const Output = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString('utf8'))
        callback()
    }
});

Twitter.pipe(Output);
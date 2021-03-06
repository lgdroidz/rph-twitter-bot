'use strict';

var redditApi = class RedditApi {
    topComment(submission){

    }

    mostReplies(submission){

    }

    gilded(submission){

    }

    // https://www.reddit.com/dev/api/#fullnames
    getContentID(fullname){
        var name = fullname.split('_');

        if( name[0] == 't1' ){
            return name[1];
        }

        return '';
    }

    // successful tweet reply
    successTweetReply(tweet_id){
        return '[Tweeted!](https://twitter.com/statuses/' + tweet_id + ')';
    }
};

module.exports = redditApi;
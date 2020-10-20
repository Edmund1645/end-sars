require('dotenv').config();

const T = require('./lib/twit');

const stream = T.stream('statuses/filter', {
  track: ['#EndSars', '#EndSarsNow'],
  lang: 'en',
});

const shouldRetweet = () => {
  if (Math.random() >= 0.02) {
    return true;
  } else {
    return false;
  }
};

const shouldLike = () => {
  if (Math.random() >= 0.02) {
    return true;
  } else {
    return false;
  }
};

const errorHandler = (err, response, data) => {
  console.log(err);
};

// stream.on('tweet', (tweet) => {
//   // retweet and like if has not been done already
//   if (tweet.favorited === false && shouldLike()) {
//     T.post('favorites/create', { id: tweet.id_str }, errorHandler);
//     console.log('liked');
//   }
//   if (tweet.retweeted === false && shouldRetweet()) {
//     T.post('statuses/retweet/:id', { id: tweet.id_str }, errorHandler);
//     console.log('retweeted');
//   }
//   return;
// });

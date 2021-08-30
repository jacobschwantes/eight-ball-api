const express = require('express');
const app = express();
const cors = require('cors');
const Sentiment = require('sentiment');
const sentiment = new Sentiment;
app.use(cors())
const PORT = process.env.PORT || 3000;

const positive = [ 
  'It is Certain.', 
  'It is decidedly so.', 
  'Without a doubt.', 
  'Yes definitely.', 
  'You may rely on it.', 
  'As I see it, yes.', 
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.'
];

const neutral = [
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.'
];

const negative = [
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

const getReply = (question, condition) => {
  let rating = sentiment.analyze(question);
  if (condition === 'biased') {
    switch(rating) {
      case rating > 0:
        return {'reading': positive[(Math.floor(Math.random() * positive.length))], 'question': question, 'sentiment': rating}
      case rating < 0:
        return {'reading': negative[(Math.floor(Math.random() * negative.length))], 'question': question, 'sentiment': rating}
      default:
        return {'reading': neutral[(Math.floor(Math.random() * neutral.length))], 'question': question, 'sentiment': rating}
    }
  }
  else {
    let allResponses = positive.concat(negative, neutral);
    return {'reading': allResponses[(Math.floor(Math.random() * allResponses.length))], 'question': question}
  }
}

app.get('/api/v1/biased', async (req, res) => {
  console.log('request recieved');
  console.log(req.query.q);
  let response = getReply(req.query.q, 'biased')
  res.json({response: response})
});
app.get('/api/v1/unbiased', async (req, res) => {
  console.log('request recieved');
  console.log(req.query.q);
  let response = getReply(req.query.q, 'unbiased')
  res.json({response: response})
});

app.listen(PORT, () => {
  console.warn(`Listening on port ${PORT}`);
});

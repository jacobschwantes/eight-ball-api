const Sentiment = require('sentiment');
const sentiment = new Sentiment();
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

export default function getReply (biased, question, lucky)  {
  let rating = sentiment.analyze(question);
  if (biased) {
      if ((rating.score > 0 && lucky === 'true') || (rating.score < 0 && lucky !== 'true')){
        return {'reading': positive[(Math.floor(Math.random() * positive.length))], 'question': question, 'sentiment': rating, 'lucky': lucky}
      }
      else if ((rating.score < 0 && lucky === 'true') || (rating.score > 0 && lucky !== 'true')){
        return {'reading': negative[(Math.floor(Math.random() * negative.length))], 'question': question, 'sentiment': rating, 'lucky' : lucky}
      }
      else {
        return {'reading': neutral[(Math.floor(Math.random() * neutral.length))], 'question': question, 'sentiment': rating}
      } 
    }
  else {
    let allResponses = positive.concat(negative, neutral);
    return {'reading': allResponses[(Math.floor(Math.random() * allResponses.length))], 'question': question}
  }
}
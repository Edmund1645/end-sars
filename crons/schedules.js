const T = require('../lib/twit');
new Date().toLocaleDateString();
const hashtags = '#EndSarsNow #EndSARS';
const handles = '@PoliceNG @MBuhari @Laurestar @NigeriaGov';
const messages = [
  `Today is ${new Date().toLocaleDateString()} and the government has not taken any reasonable action to end the brutality of the Nigerian Police Force.`,
  'Banning SARS is not enough, the entire Police Force need a refresher on their duty.',
  'How is this country supposed to be any better when the next generation is being wiped out one by one?',
];

T.post(
  'statuses/update',
  {
    status:
      messages[Math.floor(Math.random() * messages.length)] +
      ` 
    ${handles} 
    ${hashtags}
    `,
  },
  function (err, data, response) {
    console.log('error:', err);
  }
);

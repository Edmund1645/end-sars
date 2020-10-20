const T = require('../lib/twit');
const hashtags = '#EndSarsNow #EndSARS';
const handles =
  '@PoliceNG @MBuhari @NigeriaGov @ProfOsinbajo @femigbaja @DrAhmadLawan';
const messages = [
  `Today is ${new Date().toLocaleDateString()} and the government has not taken any reasonable action to end the brutality of the Nigerian Police Force.`,
  'Banning SARS is not enough, the entire Police Force need a refresher on their duty. AND WE DO NOT WANT SWAT!!',
  'We do not want rebranded SARS a.k.a SWAT',
  'What do we want???? \n END SARS',
  'Lives are being lost daily because the Nigerian government would rather spend time doing the wrong thing than the right thing',
  'We will not stop until we see results',
  'Today is as good as any other day to do the right thing',
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

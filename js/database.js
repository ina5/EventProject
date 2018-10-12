const events = [
  {
    id: 1,
    title: 'Stone Sour',
    description: 'Stone Sour playing live in Sofia. Special guests: "Nothing More" and "Dash the effort"',
    type: 'music',
    picture: './../images/StoneSour.jpeg',
    location: 'Inter Expo Center',
    dateTime: '27/06/2018 7:00 PM',
  },
  {
    id: 2,
    title: 'Levski vs Slavia',
    description: 'A football match between two of the leading Bulgarian teams',
    type: 'sport',
    picture: './../images/slavia-levski.jpg',
    location: 'Georgi Asparuhov stadium',
    dateTime: '07/10/2018 7:15 PM',
  },
  {
    id: 3,
    title: '5-th Comedy Festival Sofia',
    description: 'The fifth festival of comedy will be the biggest stand-up comdey show ever done in Bulgaria',
    type: 'culture',
    picture: './../images/comedy-fest.jpg',
    location: 'National Palace of Culture, Hall 1',
    dateTime: '15/10/2018 8:00 PM',
  },
  {
    id: 4,
    title: 'Sexy Laundry',
    description: 'A comedy theatre play dealing with the issue of mid-life crisis and the erotic fantasies of a husband and wife',
    type: 'culture',
    picture: './../images/sexy-laundry.jpg',
    location: 'Theatro, Varbitza Str 12',
    dateTime: '16/10/2018 8:00 PM',
  },
  {
    id: 5,
    title: 'Our Big French Wedding',
    description: 'A comedy theatre play. Its plot revolves around the story of a member of the parliament who is trying to boost his rating by organizing his own and his son\'s wedding in one day.',
    type: 'culture',
    picture: './../images/my-big-french-wedding.jpg',
    location: 'Satirical Theatre Aleko Konstantinov',
    dateTime: '16/10/2018 7:30 PM',
  },
  {
    id: 6,
    title: 'First International Conference on Industrial Estates',
    description: 'The event is organised by BGSklad. Official strategical partners of the event are the Bulgarian National Union of Real Esatate, InvestBulgarian Agency, BGFMA, National Company Industrial Zones and Confindustria Bulgaria',
    type: 'business',
    picture: './../images/first-conference-industrial-estates.jpg',
    location: 'Inter Expo Center, Vitosha Hall',
    dateTime: '16/10/2018 9 AM - 5 PM',
  },
  {
    id: 7,
    title: 'Jethro Tull',
    description: 'The progressive hard folk rock legents Jethro Tull are playing live in Sofia as part of their world tour 2018, celebrating their 50th anniversary on stage',
    type: 'music',
    picture: './../images/Jethro-Tull.jpg',
    location: 'National Palace Of Culture, Hall 1',
    dateTime: '17/10/2018 8:00 PM',
  },
  {
    id: 8,
    title: 'Jose Carreras',
    description: 'Jose Carreras, one of the most beautiful tenor voices of the day is coming for another breathtaking performance. His talented student Rosen Nenchev is also going to take part in the concert. A patron of the event is going to be the legendary football player Hristo Stoichkov.',
    type: 'music',
    picture: './../images/Jose-Carreras.jpg',
    location: 'Arena Armeec Sports Hall',
    dateTime: '21/10/2018 8 PM',
  },
  {
    id: 9,
    title: 'js.talks("Bulgaria")',
    description: 'A software community event to discuss the latest trends in JavaScript',
    type: 'business',
    picture: './../images/JSTalks.jpg',
    location: 'Paradise Mall, Sofia Event Center',
    dateTime: '17/11/2018 8:30 AM - 6:30 PM',
  },
];


// Display an array with our events in Local Storage
const initialEvents = function() {
  if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify(events));
  }
  return JSON.parse(localStorage.getItem('events'));
};
const eventsLocalStorage = initialEvents();
export default eventsLocalStorage;

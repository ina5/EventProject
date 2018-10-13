import * as EventFactory from './EventFactory.js';
import {
  log,
} from './logger.js';
import {
  find,
} from './SearchManager.js';
import * as EventVisualizer from './EventVisualizer.js';
import * as manager from './EventCreateManager.js';
const event = EventFactory.createEvent('1', '2', '3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXSlDrk2m6hodOSw4nyuhjkfiYbozgx0GMDdWepDf1koLf_s3F9g', '5', '16/2/2018 8:00 PM');
/* events.push(person);
const person2 = EventFactory.createEvent('pesho', 2, 3, 4, 5, 6);
console.log(person);
events.push(person);
console.log(person2); */

// EventFactory.addEventToDB(event);

// Display an array with our events in
// console.log(new Date('21/10/2018T20:00'));
log(new Date(2018, 10, 21, 20, 1).toLocaleString());
if (!localStorage.getItem(!'events')) {
  localStorage.setItem('events', JSON.stringify(EventFactory.all()));
} else {
  log(JSON.parse(localStorage.getItem('events')));
}


// get the elements, which user provided in html
const searchDropDown = document.getElementById('searchDropDown');
const searchTextElement = document.getElementById('searchString');

searchDropDown.addEventListener('click', function(ev) {
  const searchCriteria = ev.target.dataset.value;
  const searchText = searchTextElement.value;
  const foundEvents = find(searchText, searchCriteria);
  // check if we don't find nothing
  if (foundEvents.length === 0) {
    // This log will be on alert message
    log('No matches found!');
  } else {
    EventVisualizer.clearEventsOnCurrentTab();
    EventVisualizer.displayEvents(foundEvents);
  }
});

EventVisualizer.displayEvents(EventVisualizer.getEventsToday());
EventVisualizer.displayEventsOnCurrentTab();

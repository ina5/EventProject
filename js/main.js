import * as EventFactory from './EventFactory.js';
import {
  log,
} from './logger.js';
import {
  searchManager,
} from './SearchManager.js';
import {
  displayEventsOnTodayTab,
  displayEventsOnCurrentTab,
} from './EventVisualizer.js';
const event = EventFactory.createEvent(1, 2, 3, 4, 5, 6);
/* events.push(person);
const person2 = EventFactory.createEvent('pesho', 2, 3, 4, 5, 6);
console.log(person);
events.push(person);
console.log(person2); */

// EventFactory.addEventToDB(event);

// Display an array with our events in

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
  const foundEvents = searchManager.find(searchText, searchCriteria);
  // check if we don't find nothing
  if (foundEvents.length === 0) {
    // This log will be on alert message
    log('No matches found!');
  }
});

displayEventsOnTodayTab();
displayEventsOnCurrentTab();

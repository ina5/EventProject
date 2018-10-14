import * as EventFactory from './EventFactory.js';
import {
  log,
} from './logger.js';
import {
  find,
} from './SearchManager.js';
import * as EventVisualizer from './EventVisualizer.js';
import * as EventCreateManager from './EventCreateManager.js';

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

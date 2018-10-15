import * as EventFactory from './EventFactory.js';
import {
  log,
} from './logger.js';
import * as SearchManager from './SearchManager.js';

import * as EventVisualizer from './EventVisualizer.js';
import * as EventCreateManager from './EventCreateManager.js';

if (!localStorage.getItem(!'events')) {
  localStorage.setItem('events', JSON.stringify(EventFactory.all()));
} else {
  log(JSON.parse(localStorage.getItem('events')));
}

SearchManager.activateSearching();

EventVisualizer.displayEvents(EventVisualizer.getEventsToday());
EventVisualizer.displayEventsOnCurrentTab();
EventCreateManager.createEventForm();

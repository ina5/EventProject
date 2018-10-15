import eventsLocalStorage from './database.js';
import * as EventVisualizer from './EventVisualizer.js';
import * as EventFactory from './EventFactory';
import * as $ from 'jquery';
// Create new Object with different properties

// seach a string from text box by criteria from drop down
const find = function(searchText, typeDd) {
  if (searchText === '' || !typeDd) {
    throw new Error('No valid data provided');
  }
  EventVisualizer.makeTabsInactive();
  EventVisualizer.showCreateEventButton();
  return eventsLocalStorage
      .filter((event) => event[typeDd].toLowerCase().includes(searchText.toLowerCase()));
};

const activateSearching = function() {
  $('#searchDropDown').on('click', function(ev) {
    const searchCriteria = ev.target.dataset.value;
    const searchText = $('#searchString').val();
    const foundEvents = find(searchText, searchCriteria);

    if (foundEvents.length === 0) {
      alert('No matches found!');
    } else {
      EventVisualizer.clearEventsOnCurrentTab();
      EventVisualizer.displayEvents(foundEvents);
    }
  });
};

export {
  find,
  activateSearching,
};

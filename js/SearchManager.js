import eventsLocalStorage from './database.js';
import * as EventVisualizer from './EventVisualizer.js';
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
export {
  find,
};

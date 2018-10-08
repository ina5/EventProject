import eventsLocalStorage from './database.js';

// Create new Object with different properties
const searchManager = {
  // seach a string from text box by criteria from drop down
    find: function(searchText, typeDd) {
    if (searchText === '' || typeDd === undefined) {
      throw new Error('No valid data provided');
    }
    return eventsLocalStorage
        .filter((event) => event[typeDd] === searchText);
  },
};
export {
  searchManager,
};

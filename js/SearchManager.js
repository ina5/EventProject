import eventsLocalStorage from './database.js';
import * as $ from 'jquery';
// Create new Object with different properties

// seach a string from text box by criteria from drop down
const find = function (searchText, typeDd) {
  if (searchText === '' || !typeDd) {
    throw new Error('No valid data provided');
  }
  $("#topnav-tabs").children().removeClass('active-tab').addClass('inactive-tab');
  return eventsLocalStorage
    .filter((event) => event[typeDd].toLowerCase().includes(searchText.toLowerCase()));

};
export {
  find,
};
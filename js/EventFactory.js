import eventsLocalStorage from './database.js';
import {
  log,
} from './logger.js';

const createEvent = function(title, description, type, picture, location, dateTime) {
  const id = (eventsLocalStorage.length === 0) ? 1 : eventsLocalStorage[eventsLocalStorage.length - 1].id + 1;

  return {
    id,
    title,
    description,
    type,
    picture,
    location,
    dateTime,
  };
};


const addEventToDB = function(event) {
  eventsLocalStorage.push(event);

  localStorage.setItem('events', JSON.stringify(eventsLocalStorage));
  log(`Added an event in db at ${new Date()}`);
};

// Searching by title Function
const findByTitle = (titleName) => {
  if (!titleName) {
    throw new Error('No title provided!');
  }
  // Filter by title
  const eventFiltered = eventsLocalStorage.title.filter((event) => event.title === titleName);
  return eventFiltered;
};
// Return all Events
const all = function() {
  log(`Found ${eventsLocalStorage.length} in data base at ${new Date()}`);
  return eventsLocalStorage;
};

// get an element from the database by its id
const getElementById = function(id) {
  let foundElement;
  eventsLocalStorage.forEach((element) => {
    if (element.id === id) {
      foundElement = element;
    }
  });
  return foundElement;
};

export {
  createEvent,
  all,
  findByTitle,
  addEventToDB,
  getElementById,
};

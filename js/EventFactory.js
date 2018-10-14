import eventsLocalStorage from './database.js';
import { getItem, setItem, init } from './database.js';
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

//
init();
const events = getItem('events');

// Searching by title Function
const findByTitle = (titleName) => {
  if (!titleName) {
    throw new Error('No title provided!');
  }
  // Filter by title
  const eventFiltered = events.filter( (event) => {
    return event.title === titleName;
  });
  return eventFiltered;
};
// Searching by date // USE IT TO CHECK IF WE HAVE EVENT WITH THE SAME DATE
const findByDateTime = (eventDate) => {
  if (!eventDate) {
    throw new Error('No date provided!');
  }
  // Filter by title
  const eventFiltered = events.filter( (event) => {
    return event.dateTime === eventDate;
  });
  return eventFiltered;
};

// Return all Events
const all = function() {
  log(`Found ${eventsLocalStorage.length} in data base at ${new Date()}`);
  return eventsLocalStorage;
};

// get an element from the database by its id
const getElementById = function(id) {
  const foundObject = all().find( (event) => {
    return event.id === id;
  });
  return foundObject;
};

export {
  createEvent,
  all,
  findByTitle,
  findByDateTime,
  addEventToDB,
  getElementById,
};

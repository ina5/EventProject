import eventsLocal from './database.js';

const createEvent = function (title, description, type, picture, location, dateTime) {
  const id = (eventsLocal.length === 0) ? 1 : eventsLocal[eventsLocal.length - 1].id + 1;

  return {
    id,
    description,
    type,
    picture,
    location,
    dateTime,
  };
};


// Searching by title Function
const findByTitle = (titleName) => {
  if (!titleName) {
    throw new Error('No title provided!');
  }
  // Filter by title
  const eventFiltered = eventsLocal.title.filter(event => event.title === titleName);
  return eventFiltered;
};
// Return all Events
const all = function () {
  log(`Found ${eventsLocal.length} in data base at ${new Date()}`);
  return eventsLocal;
};

<<<<<<< HEAD
=======
    return {
        id,
        title,
        description,
        type,
        picture,
        location,
        dateTime
    }
}
>>>>>>> e0f52ebbd5294775a9d55a6d6b5f8c61dcff2e9c

export {
  createEvent,
  all,
  findByTitle,

};

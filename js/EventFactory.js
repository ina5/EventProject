import events from './database.js';

const createEvent = function (title, description, type, picture, location, dateTime) {
    const id = (events.length === 0) ? 1 : events[events.length - 1].id + 1;

    return {
        id,
        description,
        type,
        picture,
        location,
        dateTime
    }
}

export {
    createEvent,
}
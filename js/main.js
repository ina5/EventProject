import * as EventFactory from './EventFactory.js';
import events from './database.js';

const person = EventFactory.createEvent(1, 2, 3, 4, 5, 6);
events.push(person);
const person2 = EventFactory.createEvent("pesho", 2, 3, 4, 5, 6);
console.log(person);
events.push(person);
console.log(person2);
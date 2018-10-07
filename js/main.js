import * as EventFactory from './EventFactory.js';
import {
  log
} from './logger.js';
import {
  searchManager
} from './SearchManager.js';
const event = EventFactory.createEvent(1, 2, 3, 4, 5, 6);
/* events.push(person);
const person2 = EventFactory.createEvent('pesho', 2, 3, 4, 5, 6);
console.log(person);
events.push(person);
console.log(person2); */

//EventFactory.addEventToDB(event);

// Display an array with our events in

if (!localStorage.getItem(!'events')) {
  localStorage.setItem('events', JSON.stringify(EventFactory.all()));
} else {
  log(JSON.parse(localStorage.getItem('events')));
}


// get the elements, which user provided in html
const searchDropDown = document.getElementById("searchDropDown");
const searchTextElement = document.getElementById("searchString");

searchDropDown.addEventListener("click", function (ev) {
  const searchCriteria = ev.target.dataset.value;
  const searchText = searchTextElement.value;
  const foundEvents = searchManager.find(searchText, searchCriteria);
  // check if we don't find nothing
  if (foundEvents.length === 0) {
    // This log will be on alert message
    log('No matches found!')
  }
});


//TO DO:: DO IT IN ANOTHER MODULE

//TODO: change the return condition (compare to current date and not
// the magic number for month 10)

const eventsToday = EventFactory.all()
.filter(event => {
  return +event.dateTime.split(' ')[0].split('/')[1] === 10;
});

const eventsPast = EventFactory.all()
.filter(event => {
  return +event.dateTime.split(' ')[0].split('/')[1] < 10;
});

const eventsFuture = EventFactory.all()
.filter(event => {
  return +event.dateTime.split(' ')[0].split('/')[1] > 10;
});

eventsToday.forEach(event => {
//log(event.title);
$(".event-list").append(`<li> ${event.title} </li>`).show();
});

$(".topnav li").on('click', function () {
//log($(this).html());

//make the last active -> inactive
$(this).parent().find("li").removeClass("active-tab inactive-tab").addClass("inactive-tab");

//make clicked one active
$(this).removeClass("inactive-tab").addClass("active-tab");

//update displayed events
const toDisplayStatus = $(this).find('a').attr('href').slice(1);
$(".event-list").empty();
if (toDisplayStatus === 'today') {
  eventsToday.forEach(event => {
    //log(event.title);
    $(".event-list").append(`<li> ${event.title} </li>`).show();
  });
} else if (toDisplayStatus === 'past') {
  eventsPast.forEach(event => {
    //log(event.title);
    $(".event-list").append(`<li> ${event.title} </li>`).show();
  });
} else {
  eventsFuture.forEach(event => {
    //log(event.title);
    $(".event-list").append(`<li> ${event.title} </li>`).show();
  });
}
});
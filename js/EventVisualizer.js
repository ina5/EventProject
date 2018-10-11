import * as EventFactory from './EventFactory.js';
import * as EventTypeManager from './EventTypeManager.js';
import {
  log,
} from './logger.js';
// TO DO: change the return condition (compare to current date and not
// the magic number for month 10)

const getEventsToday = function() {
  const eventsToday = EventFactory.all()
      .filter((event) => {
        return +event.dateTime.split(' ')[0].split('/')[1] === 10;
      });

  return eventsToday;
};

const getPastEvents = function() {
  const eventsPast = EventFactory.all()
      .filter((event) => {
        return +event.dateTime.split(' ')[0].split('/')[1] < 10;
      });

  return eventsPast;
};

const getFutureEvents = function() {
  const eventsFuture = EventFactory.all()
      .filter((event) => {
        return +event.dateTime.split(' ')[0].split('/')[1] > 10;
      });

  return eventsFuture;
};

/*
const displayEventInDetails = function() {
  const pastState = $('.event-list').html();
  const newHTML = ""; // has X buton .onlick() -> return to pastState;
  $('event-list').empty() = newHTML;
};
*/


const getEventPreviewHTML = function(event) {
  const divID = 'event-preview' + event.id;
  if (EventTypeManager.getIMGbyType(event.type) === 'Unknown event type.') {
    console.log(JSON.stringify(event));
  }
  const imgPath = './..' + EventTypeManager.getIMGbyType(event.type);
  // const formattedDate = ''; todo
  const startTime = event.dateTime.split(' ').slice(1).join(' ');

  return `<div id="${divID}" class="event-preview">
  <img src="${imgPath}">
  <h2>${event.title}</h2>
  
  <h3 class="event-preview-time">Oct 26 2018 ${startTime}</h3>
  </div>`;
};

const includeEventInList = function(event) {
  const previewHTML = getEventPreviewHTML(event);
  $('.event-list').append(`<li> ${previewHTML} </li>`).show();
  /*   $('.event-list').click(function(e) {
    console.log($(e.target));
  }); */
};

const displayEvents = function(eventsToDisplay) {
  eventsToDisplay.forEach((event) => {
    includeEventInList(event);
  });
};

const clearEventsOnCurrentTab = function() {
  $('.event-list').empty();
};

const displayEventsOnCurrentTab = function() {
  const _updateEvents = function(tabStatus) {
    clearEventsOnCurrentTab();
    if (tabStatus === 'today') {
      displayEvents(getEventsToday());
    } else if (tabStatus === 'past') {
      displayEvents(getPastEvents());
    } else {
      displayEvents(getFutureEvents());
    }
  };

  $('.topnav li').on('click', function() {
    // make the last active -> inactive
    $(this).parent().find('li')
        .removeClass('active-tab inactive-tab')
        .addClass('inactive-tab');

    // make clicked one -> active
    $(this).removeClass('inactive-tab').addClass('active-tab');

    // update displayed events
    const toDisplayStatus = $(this).find('a').attr('href').slice(1);
    _updateEvents(toDisplayStatus);
  });
};

export {
  clearEventsOnCurrentTab,
  getEventsToday,
  getPastEvents,
  getFutureEvents,
  displayEvents,
  displayEventsOnCurrentTab,
};

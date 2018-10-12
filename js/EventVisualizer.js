import * as EventFactory from './EventFactory.js';
import * as EventTypeManager from './EventTypeManager.js';
import * as $ from 'jquery';
import {
  log,
} from './logger.js';
// TO DO: change the return condition (compare to current date and not
// the magic number for month 10)

const getEventsToday = function () {
  const eventsToday = EventFactory.all()
    .filter((event) => {
      return +event.dateTime.split(' ')[0].split('/')[1] === 10;
    });

  return eventsToday;
};

const getPastEvents = function () {
  const eventsPast = EventFactory.all()
    .filter((event) => {
      return +event.dateTime.split(' ')[0].split('/')[1] < 10;
    });

  return eventsPast;
};

const getFutureEvents = function () {
  const eventsFuture = EventFactory.all().filter((event) => {
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

const displayDetailedPreviewHTML = function (eventDivId) {
  const eventID = +eventDivId.slice('#event-preview'.length);
  const currentEvent = EventFactory.getElementById(eventID);
  const detailedTitle = currentEvent.title;
  const detailedImgPath = currentEvent.picture;
  const detailedDescription = currentEvent.description;
  const detailedLocation = currentEvent.location;
  const detailedDateTime = currentEvent.dateTime;
  $('.container').append('<div id="detailedPreviewDiv"</div>');
  $('#detailedPreviewDiv').html('<button type="button" id="detailedButton">X</button>').show();
  $('#detailedButton').after('<header><h1 id="detailedTitle"></h1></header>');
  $('#detailedTitle').append(detailedTitle);
  $('#detailedTitle').after('<div id="detailedPicture"></div>');
  const elem = document.createElement('img');
  document.getElementById('detailedPicture').appendChild(elem);
  elem.src = detailedImgPath;
  $('#detailedPicture').after('<div id="detailedDescription"></div>');
  $('#detailedDescription').append(detailedDescription);
  $('#detailedPicture').after('<div id="detailedLocation">Where? </div>');
  $('#detailedLocation').append('<span></span>');
  $('#detailedLocation span').append(detailedLocation);
  $('#detailedLocation').append('<div id="detailedDateTime">When? </div>')
  $('#detailedDateTime').append('<span></span>');
  $('#detailedDateTime span').append(detailedDateTime);
  log(currentEvent.type);
  if (currentEvent.type === 'music') {
    $('#detailedPreviewDiv').css({ 'background-image': 'url(./../images/music-transparent.png)', 'background-size': 'cover' });
  } else if (currentEvent.type === 'sport') {
    $('#detailedPreviewDiv').css({ 'background-image': 'url(./../images/sport-transparent.png)', 'background-size': 'cover' });
  } else if (currentEvent.type === 'culture') {
    $('#detailedPreviewDiv').css({ 'background-image': 'url(./../images/culture-transparent.png)', 'background-size': 'cover' });
  } else if (currentEvent.type === 'business') {
    $('#detailedPreviewDiv').css({ 'background-image': 'url(./../images/business-transparent.png)', 'background-size': 'cover' });
  }

  $(document).on('click', '#detailedButton', function () {
    $('#detailedPreviewDiv').empty().remove();
    $('.event-list').show();
  });

};

const addOnClickEventOnShortPreview = function (elementId) {
  $(document).on('click', `${elementId}`, function () {
    $('.event-list').hide();
    displayDetailedPreviewHTML(elementId);
  });
};

const getEventPreviewHTML = function (event) {
  const divID = 'event-preview' + event.id;

  if (EventTypeManager.getIMGbyType(event.type) === 'Unknown event type.') {
    console.log(JSON.stringify(event));
  }
  const imgPath = './..' + EventTypeManager.getIMGbyType(event.type);
  // const formattedDate = ''; todo
  const startTime = event.dateTime.split(' ').slice(1)
    .join(' ');
  addOnClickEventOnShortPreview(`#${divID}`);
  return `<div id="${divID}" class="event-preview">
  <img src="${imgPath}">
  <h2>${event.title}</h2>
  
  <h3 class="event-preview-time">Oct 26 2018 ${startTime}</h3>
  </div>`;
};

const includeEventInList = function (event) {
  const previewHTML = getEventPreviewHTML(event);
  $('.event-list').append(`<li> ${previewHTML} </li>`)
    .show();
  /*   $('.event-list').click(function(e) {
    console.log($(e.target));
  }); */
};

const displayEvents = function (eventsToDisplay) {
  $('#detailedPreviewDiv').hide();
  eventsToDisplay.forEach((event) => {
    includeEventInList(event);
  });
};

const clearEventsOnCurrentTab = function () {
  $('.event-list').empty();
};

const displayEventsOnCurrentTab = function () {
  const _updateEvents = function (tabStatus) {
    clearEventsOnCurrentTab();
    if (tabStatus === 'today') {
      displayEvents(getEventsToday());
    } else if (tabStatus === 'past') {
      displayEvents(getPastEvents());
    } else {
      displayEvents(getFutureEvents());
    }
  };

  $('.topnav li').on('click', function () {
    // make the last active -> inactive
    $(this).parent()
      .find('li')
      .removeClass('active-tab inactive-tab')
      .addClass('inactive-tab');

    // make clicked one -> active
    $(this).removeClass('inactive-tab')
      .addClass('active-tab');

    // update displayed events
    const toDisplayStatus = $(this).find('a')
      .attr('href')
      .slice(1);
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

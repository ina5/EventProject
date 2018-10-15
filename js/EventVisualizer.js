import * as EventFactory from './EventFactory.js';
import * as EventTypeManager from './EventTypeManager.js';
import * as $ from 'jquery';
import * as DateManager from './DateManager.js';

const hideCreateFormAndShowCreateButton = function() {
  $('.div-createEvent').hide();
  $('#create-btn-main').show();
};

const getEventsToday = function() {
  hideCreateFormAndShowCreateButton();
  const eventsToday = EventFactory.all()
      .filter((event) => DateManager.isToday(event.dateTime));

  return eventsToday;
};

const getPastEvents = function() {
  hideCreateFormAndShowCreateButton();
  const eventsPast = EventFactory.all()
      .filter((event) => DateManager.isPast(event.dateTime));

  return eventsPast;
};

const getFutureEvents = function() {
  hideCreateFormAndShowCreateButton();
  const eventsFuture = EventFactory.all()
      .filter((event) => DateManager.isFuture(event.dateTime));

  return eventsFuture;
};


const makeTabsInactive = function() {
  $('#topnav-tabs')
      .children()
      .removeClass('active-tab inactive-tab')
      .addClass('inactive-tab');
};

const makeTabActive = function(tab) {
  $(tab).removeClass('inactive-tab')
      .addClass('active-tab');
};

const hideContentInContainer = function() {
  $('.container').children().hide();
};

const hideCreateEventButton = function() {
  $('#create-btn-main').hide();
};

const showCreateEventButton = function() {
  $('#create-btn-main').show();
};


const displayDetailedPreviewHTML = function(eventDivId) {
  $('#detailedPreviewDiv').remove();

  const eventID = +eventDivId.slice('#event-preview'.length);
  const currentEvent = EventFactory.getElementById(eventID);
  const humanReadableDateTime = DateManager.convertToHumanReadableDate(currentEvent.dateTime);

  const detailedPreviewDiv = $('<div>').attr('id', 'detailedPreviewDiv');
  const detailedButtonClose = $('<button>')
      .attr('type', 'button')
      .text('close')
      .attr('id', 'detailedButton');
  const detailedTitle = $('<h1>')
      .attr('id', 'detailedTitle')
      .text(currentEvent.title);
  const detailedPicture = $('<img>')
      .attr('src', currentEvent.picture)
      .attr('id', 'detailedPicture');
  const detailedLocation = $('<div>')
      .attr('id', 'detailedLocation')
      .text('Where? ')
      .append($('<span>').text(currentEvent.location));
  const detailedDateTime = $('<div>')
      .attr('id', 'detailedDateTime')
      .text('When? ')
      .append($('<span>').text(humanReadableDateTime));
  const detailedDescription = $('<div>')
      .attr('id', 'detailedDescription')
      .text(currentEvent.description);

  $('.container').append(detailedPreviewDiv);
  detailedPreviewDiv.append(detailedButtonClose, detailedTitle, detailedPicture,
      detailedLocation, detailedDateTime, detailedDescription);

  $('#detailedPreviewDiv').css({ 'background-image': `url(./..${EventTypeManager.getBackgroundTypeIMG(currentEvent.type)})`, 'background-size': 'cover' });

  $(document).on('click', '#detailedButton', function() {
    $('#detailedPreviewDiv').empty().remove();
    $('.event-list').show();
  });
};

const addOnClickEventOnShortPreview = function(elementId) {
  $(document).on('click', `${elementId}`, function() {
    $('.event-list').hide();
    displayDetailedPreviewHTML(elementId);
  });
};

const getEventPreviewHTML = function(event) {
  const divID = 'event-preview' + event.id;

  if (EventTypeManager.getRegularTypeIMG(event.type) === 'Unknown event type.') {
    throw new Error('Unknown event type.');
  }
  const imgPath = './..' + EventTypeManager.getRegularTypeIMG(event.type);
  const formattedDate = DateManager.convertToHumanReadableDate(event.dateTime);
  const startTime = event.dateTime.split(' ').slice(1)
      .join(' ');
  addOnClickEventOnShortPreview(`#${divID}`);

  return $('<div>')
      .attr('id', divID)
      .addClass('event-preview')
      .append($('<img>').attr('src', imgPath))
      .append($('<h2>').text(event.title))
      .append($('<h3>').addClass('event-preview-time').text(formattedDate + ' ' + startTime));
};

const includeEventInList = function(event) {
  const previewHTML = getEventPreviewHTML(event);
  $('.event-list').append($('<li>').html(previewHTML)).show();
};

const displayEvents = function(eventsToDisplay) {
  hideContentInContainer();
  eventsToDisplay.forEach((event) => {
    includeEventInList(event);
  });
};

const clearEventsOnCurrentTab = function() {
  $('.event-list').empty();
};

const updateEventsOnTab = function(tab) {
  clearEventsOnCurrentTab();
  if (tab === 'today') {
    displayEvents(getEventsToday());
  } else if (tab === 'past') {
    displayEvents(getPastEvents());
  } else {
    displayEvents(getFutureEvents());
  }
};

const displayEventsOnCurrentTab = function() {
  $('.topnav li').on('click', function() {
    makeTabsInactive();
    makeTabActive(this);

    // update displayed events
    const nameOfTabToUpdate = $(this).find('a')
        .attr('href')
        .slice(1);
    updateEventsOnTab(nameOfTabToUpdate);
  });
};

export {
  clearEventsOnCurrentTab,
  getEventsToday,
  getPastEvents,
  getFutureEvents,
  displayEvents,
  displayEventsOnCurrentTab,
  makeTabsInactive,
  makeTabActive,
  hideContentInContainer,
  hideCreateEventButton,
  showCreateEventButton,
  displayDetailedPreviewHTML,
};

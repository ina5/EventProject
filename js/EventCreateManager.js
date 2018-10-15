import * as EventFactory from './EventFactory.js';
import * as EventVisualizer from './EventVisualizer.js';
import { log } from './logger.js';

const createElementWithAppend = function(element, textToAdd, classToAdd, toAppend) {
  return $(`<${element}>`)
      .text(textToAdd)
      .addClass(classToAdd)
      .append(toAppend);
};
const createElement = function(element, textToAdd, classToAdd) {
  return $(`<${element}>`)
      .text(textToAdd)
      .addClass(classToAdd);
};

const createEventForm = function() {
  const btnCreateEvent = createElement('button id="btn-innerCreate"',
      'Create', 'btn-createEvent').attr('type', 'button');

  $('#create-btn-main').click(function() {
    EventVisualizer.hideContentInContainer();
    EventVisualizer.hideCreateEventButton();
    EventVisualizer.makeTabsInactive();

    const divCreateEvent = $('.div-createEvent').empty().show();

    const text = createElement('p',
        'Please fill in this form to create an event',
        'paragraph-createEvent');
    const headerText = createElement('h1', 'Create', 'header-createEvent');
    const labelTitle = createElementWithAppend('label', 'Title  ',
        'input-createEvent', '<input id="inputTitle">');
    const labelCriteria = createElement('label', 'Choose a category  ',
        'input-createEvent');
    const selectCattegory = createElement('select id="inputType"', 'Category  ', 'category-createEvent');

    const resultData = ['music', 'culture', 'sport', 'business'];

    const myselect = selectCattegory;
    $.each(resultData, function(index, key) {
      myselect
          .append($('<option>').val(key).html(key));
    });
    labelCriteria.append(selectCattegory);

    const labelDescription = createElementWithAppend('label', 'Description  ',
        'input-createEvent', '<input id="inputDescription">');

    const labelPicture = createElementWithAppend('label', 'Picture path  ',
        'input-createEvent', '<input id="inputPicture">');

    const labelLocation = createElementWithAppend('label', 'Location  ',
        'input-createEvent', '<input id="inputLocation">');

    const inputDate = $('<input>').attr('id', 'inputDate').attr('type', 'text');

    const labelDate = createElementWithAppend('label', 'When  ',
        'input-createEvent', inputDate);
    divCreateEvent
        .append(headerText, text, labelTitle, labelCriteria, labelDescription, labelPicture, labelLocation, labelDate, btnCreateEvent);

    // should remove the previous divs created by the library in order to protect us from leaks
    $('.xdsoft_datetimepicker').remove();

    $(function() {
      $('#inputDate').datetimepicker();
    });
    apllyClickEventOnCreateButton();
  });
};

const apllyClickEventOnCreateButton = function() {
  $('#btn-innerCreate').click(function() {
    const inputTitleVal = $('#inputTitle').val();
    const inputDescriptionVal = $('#inputDescription').val();
    const inputTypeVal = $('#inputType').val();
    const inputPicturePath = $('#inputPicture').val();
    const inputLocationVal = $('#inputLocation').val();
    const inputDateVal = $('#inputDate').val();

    if (!inputTitleVal ||
            !inputDescriptionVal ||
            !inputTypeVal ||
            !inputPicturePath ||
            !inputLocationVal ||
            !inputDateVal) {
      alert('No valid data provided');
    } else {
      const eventToAdd = EventFactory.createEvent(inputTitleVal, inputDescriptionVal,
          inputTypeVal, inputPicturePath, inputLocationVal, inputDateVal);

      try {
        EventFactory.addEventToDB(eventToAdd);
      } catch (error) {
        log(error);
      }
      alert('The event was added successfully');
      EventVisualizer.hideContentInContainer();
      EventVisualizer.displayDetailedPreviewHTML('#event-preview' + eventToAdd.id);
      EventVisualizer.showCreateEventButton();
    }
  });
};

export {
  createEventForm,
  createElement,
  createElementWithAppend,
};

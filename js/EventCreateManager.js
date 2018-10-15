import * as $ from 'jquery';
import * as EventFactory from './EventFactory.js';
import * as EventVisualizer from './EventVisualizer.js';

// CREATE BUTTON HERE
const btnCreateEvent = $('<button></button>');

const createEventForm = function() {
  $('#create-btn-main').click(function() {
    EventVisualizer.hideContentInContainer();
    EventVisualizer.hideCreateEventButton();

    // MAKE TABS INACTIVE
    EventVisualizer.makeTabsInactive();

    // ATTACH CREATE EVENT FORM
    const divCreateEvent = $('.div-createEvent').empty().show();

    // START CREATE NEW ELEMENTS
    const text = $('<p></p>')
        .text('Please fill in this form to create an event')
        .addClass('paragraph-createEvent');

    const headerText = $('<h1></h1>').text('Create').css({
      color: 'white',
    });

    // TITLE
    const labelTitle = $('<label></label>')
        .text('Title  ')
        .addClass('input-createEvent');
    $(labelTitle)
        .append('<input id="inputTitle"></input>');

    // CRITERIA
    const labelCriteria = $('<label></label>')
        .text('Choose a category  ')
        .addClass('input-createEvent');
    const selectCattegory = $('<select id="inputType"></select>')
        .text('Category  ');
    const resultData = ['music', 'culture', 'sport', 'business'];

    // CRITERIA  --- Drop Down element with a categories
    $(document)
        .ready(function() {
          const myselect = selectCattegory;
          $.each(resultData, function(index, key) {
            myselect
                .append($('<option></option>').val(key).html(key));
          });
        });
    labelCriteria.append(selectCattegory);

    // DESCRIPTION
    const labelDescription = $('<label></label>')
        .text('Description  ');
    labelDescription
        .append('<input id="inputDescription"></input>')
        .addClass('input-createEvent');

    // PICTURE PATH
    const labelPicture = $('<label></label>')
        .text('Picture path  ');
    labelPicture
        .append('<input id="inputPicture"></input>')
        .addClass('input-createEvent');

    // LOCATION
    const labelLocation = $('<label></label>')
        .text('Location  ');
    labelLocation
        .append('<input id="inputLocation"></input>')
        .addClass('input-createEvent');

    // DATE TIME
    const inputDate = $('<input/>', {
      id: 'inputDate',
      type: 'datetime-local',
      name: 'Choose a date  ',
    });

    const labelDate = $('<label></label>')
        .text('When  ')
        .addClass('input-createEvent');
    labelDate.append(inputDate);

    // BUTTON CREATE AN EVENT
    btnCreateEvent.attr('type', 'button')
        .text('Create')
        .addClass('btn-createEvent');

    apllyClickEventOnCreateButton();

    // APPEND THE WHOLE ELEMENTS
    divCreateEvent
        .append(headerText, text, labelTitle, labelCriteria, labelDescription, labelPicture, labelLocation, labelDate, btnCreateEvent);
    divCreateEvent.children().css({
      'display': 'block',
    });
    $('.container')
        .css('background-image', 'url("./../images/cosmos-background.jpg")');
  });
};

const apllyClickEventOnCreateButton = function() {
  btnCreateEvent.click(function() {
    // GET VALUES FROM THE INPUT
    const inputTitleVal = $('#inputTitle').val();
    const inputDescriptionVal = $('#inputDescription').val();
    const inputTypeVal = $('#inputType').val();
    const inputPicturePath = $('#inputPicture').val();
    const inputLocationVal = $('#inputLocation').val();
    const inputDateVal = $('#inputDate').val();

    // VALIDATION
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

      EventFactory.addEventToDB(eventToAdd);
      alert('The event was added successfully');
      EventVisualizer.hideContentInContainer();
      EventVisualizer.displayDetailedPreviewHTML('#event-preview' + eventToAdd.id);
      EventVisualizer.showCreateEventButton();
    }

    // clearInputForms();
    // $('.container').find('.div-createEvent').remove();
  });
};

export { createEventForm };

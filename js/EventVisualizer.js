import * as EventFactory from './EventFactory.js';
import {
    log
} from './logger.js';
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

const includeEventInList = function (event) {
    $(".event-list").append(`<li> ${event.title} </li>`).show();
}

const displayEventsOnTodayTab = function () {
    eventsToday.forEach(event => {
        includeEventInList(event);
    });
};


const displayEventsOnCurrentTab = function () {
    const _updateEvents = function (tabStatus) {
        $(".event-list").empty();
        if (tabStatus === 'today') {
            displayEventsOnTodayTab();
        } else if (tabStatus === 'past') {
            eventsPast.forEach(event => {
                includeEventInList(event);
            });
        } else {
            eventsFuture.forEach(event => {
                includeEventInList(event);
            });
        };
    }

    $(".topnav li").on('click', function () {
        //make the last active -> inactive
        $(this).parent().find("li").removeClass("active-tab inactive-tab").addClass("inactive-tab");

        //make clicked one active
        $(this).removeClass("inactive-tab").addClass("active-tab");

        //update displayed events

        //returns today/past/future
        const toDisplayStatus = $(this).find('a').attr('href').slice(1);
        _updateEvents(toDisplayStatus);
    });
};

export {
    displayEventsOnTodayTab,
    displayEventsOnCurrentTab,
};
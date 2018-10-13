const isToday = function(date) {
    const currentDay = new Date();
    return date.getFullYear() === currentDay.getFullYear() &&
        date.getMonth() === currentDay.getMonth() &&
        date.getDate() === currentDay.getDate();
};

const isPast = function(date) {
    const currentDay = new Date();
    return date.getFullYear() <= currentDay.getFullYear() &&
        date.getMonth() <= currentDay.getMonth() &&
        date.getDate() < currentDay.getDate();
};

const isFuture = function(date) {
    const currentDay = new Date();
    return date.getFullYear() >= currentDay.getFullYear() &&
        date.getMonth() >= currentDay.getMonth() &&
        date.getDate() > currentDay.getDate();
};

const convertToHumanReadableDate = function(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const test = new Date(2018, 9, 26, 19, 15);
    return `${months[test.getMonth()]} ${test.getDate()} ${test.getFullYear()} ${test.getHours()}:${test.getMinutes()}`;
};

export {
    isToday,
    isPast,
    isFuture,
    convertToHumanReadableDate,
};

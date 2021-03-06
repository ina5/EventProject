const convertToHumanReadableDate = function(date) {
  const dateObject = new Date(date);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const hours = (dateObject.getHours().toString().length === 1) ? '0' + dateObject.getHours() : dateObject.getHours();
  const minutes = (dateObject.getMinutes().toString().length === 1) ? '0' + dateObject.getMinutes() : dateObject.getMinutes();
  return `${months[dateObject.getMonth()]} ${dateObject.getDate()} ${dateObject.getFullYear()} ${hours}:${minutes}`;
};

const getDateWithoutTime = function(date) {
  const dateObject = new Date(date);

  const month = (dateObject.getMonth().toString().length === 1) ? '0' + dateObject.getMonth() : dateObject.getMonth();
  const day = (dateObject.getDate().toString().length === 1) ? '0' + dateObject.getDate() : dateObject.getDate();

  return `${dateObject.getFullYear()}/${month}/${day}}`;
};

const isToday = function(date) {
  const currentDay = new Date();

  return getDateWithoutTime(currentDay) === getDateWithoutTime(date);
};

const isPast = function(date) {
  const currentDay = new Date();

  return getDateWithoutTime(currentDay) > getDateWithoutTime(date);
};

const isFuture = function(date) {
  const currentDay = new Date();

  return getDateWithoutTime(currentDay) < getDateWithoutTime(date);
};

export {
  isToday,
  isPast,
  isFuture,
  convertToHumanReadableDate,
  getDateWithoutTime,
};

const getIMGbyType = function(type) {
  if (type === 'business') {
    return '/images/business.png';
  }

  if (type === 'music') {
    return '/images/music.png';
  }

  if (type === 'sport') {
    return '/images/sport.png';
  }

  if (type === 'culture') {
    return '/images/culture.png';
  }

  return 'Unknown event type.';
};

export {
  getIMGbyType,
};

const getRegularTypeIMG = function(type) {
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

  throw new Error('Unknown event type.');
};

const getBackgroundTypeIMG = function(type) {
  if (type === 'business') {
    return '/images/business-transparent.png';
  }

  if (type === 'music') {
    return '/images/music-transparent.png';
  }

  if (type === 'sport') {
    return '/images/sport-transparent.png';
  }

  if (type === 'culture') {
    return '/images/culture-transparent.png';
  }

  throw new Error('Unknown event type.');
};

export {
  getRegularTypeIMG,
  getBackgroundTypeIMG,
};

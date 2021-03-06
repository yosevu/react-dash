export const types = {
  ADD_FEED: 'ADD_FEED',
  REMOVE_FEED: 'REMOVE_FEED',
  CHANGE_FEED: 'CHANGE_FEED',
  TOGGLE_NEW_QUOTE: 'TOGGLE_NEW_QUOTE',
  FILTER_QUOTES: 'FILTER_QUOTES',
  ADD_QUOTE: 'ADD_QUOTE', 
  REMOVE_QUOTE: 'REMOVE_QUOTE',
  UPDATE_QUOTE: 'UPDATE_QUOTE',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_CURRENT_QUOTE: 'SET_CURRENT_QUOTE',
  CHANGE_TAB: 'CHANGE_TAB',
};

export default types;

// QuotesUi

export const changeTab = (feedId, feedName) => {
  return {
    type: types.CHANGE_TAB,
    feedId,
    feedName
  };
};

export const toggleNewQuote = () => {
  return {
    type: types.TOGGLE_NEW_QUOTE
  };
};

export const setCurrentQuote = quoteId => {
  return {
    type: types.SET_CURRENT_QUOTE,
    quoteId
  }
};

// Quotes

export const addFeed = feedName => {
  return {
    type: types.ADD_FEED,
    feedName
  };
};

export const removeFeed = feedId => {
  return {
    type: types.REMOVE_FEED,
    feedId
  }
};

export const changeFeed = (feedId, feedName) => {
  return {
    type: types.CHANGE_FEED,
    feedId,
    feedName
  };
};

export const addQuote = (feedId, text, source) => {
  return {
    type: types.ADD_QUOTE,
    feedId,
    text,
    source
  };
};

export const removeQuote = (feedId, quoteId) => {
  return {
    type: types.REMOVE_QUOTE,
    feedId,
    quoteId
  }
};

export const updateQuote = (quoteId, quote) => {
  return {
    type: types.UPDATE_QUOTE,
    quoteId,
    quote
  };
};

export const toggleFavorite = (feedId, quoteId) => {
  return {
    type: types.TOGGLE_FAVORITE,
    feedId,
    quoteId
  }
};

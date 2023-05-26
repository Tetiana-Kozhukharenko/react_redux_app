export const addPublication = publication => {
  return {
    type: 'ADD_PUBLICATION',
    payload: publication
  };
};

export const incrementLikes = (publicationId) => {
  return {
    type: 'INCREMENT_LIKES',
    payload: publicationId
  };
};

export const decrementLikes = (publicationId) => {
  return {
    type: 'DECREMENT_LIKES',
    payload: publicationId
  };
};

export const incrementComments = (publicationId) => {
  return {
    type: 'INCREMENT_COMMENTS',
    payload: publicationId
  };
};

export const decrementComments = (publicationId) => {
  return {
    type: 'DECREMENT_COMMENTS',
    payload: publicationId
  };
};

export const incrementReposts = (publicationId) => {
  return {
    type: 'INCREMENT_REPOSTS',
    payload: publicationId
  };
};

export const decrementReposts = (publicationId) => {
  return {
    type: 'DECREMENT_REPOSTS',
    payload: publicationId
  };
};
const songPlayer = (state = { songObj: {} }, action) => {
  switch (action.type) {
    case "ADD_TO_PLAYER":
      return {
        songObj: action.payload,
      };

    default:
      return state;
  }
};

export default songPlayer;

const favouriteSongs = (state = { favSongs: [] }, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      console.log(action.payload);
      return {
        ...state,
        favSongs: [...state.favSongs, action.payload],
      };

    case "REM_FAVOURITE":
      return {
        ...state,
        favSongs: state.favSongs.filter((song) => song.title !== action.payload),
      };

    default:
      return state;
  }
};

export default favouriteSongs;

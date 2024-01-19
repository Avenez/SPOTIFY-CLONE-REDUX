import { VIEW_ALBUM, VIEW_ARTIST, SET_ROCK_DATA, SET_POP_DATA, SET_HIPHOP_DATA } from "../action";

const intialState = {
  album: [],
  artist: [],
  rock: [],
  pop: [],
  hiphop: [],
};

const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case VIEW_ALBUM:
      return {
        ...state,
        album: [action.payload],
      };
    case VIEW_ARTIST:
      return {
        ...state,
        artist: [action.payload],
      };

    case SET_ROCK_DATA:
      return { ...state, rock: action.payload };
    case SET_POP_DATA:
      return { ...state, pop: action.payload };
    case SET_HIPHOP_DATA:
      return { ...state, hiphop: action.payload };
    default:
      return state;
  }
};

export default mainReducer;

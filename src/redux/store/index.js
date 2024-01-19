import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import favouriteSongsReducer from "../reducer/favouriteSongs"; // Assuming you have a reducer file for favouriteSongs
import { thunk } from "redux-thunk";
import favouriteSongs from "../reducer/favouriteSongs";
import songPlayer from "../reducer/songPlayer";

const store = configureStore({
  reducer: {
    main: mainReducer,
    favouriteSongs: favouriteSongs,
    songPlayer: songPlayer,
  },
  middleware: [thunk],
});

export default store;

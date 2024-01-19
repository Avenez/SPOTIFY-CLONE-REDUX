export const VIEW_ARTIST = "VIEW_ARTIST";
export const VIEW_ALBUM = "VIEW_ALBUM";
export const SET_ROCK_DATA = "SET_ROCK_DATA";
export const SET_POP_DATA = "SET_POP_DATA";
export const SET_HIPHOP_DATA = "SET_HIPHOP_DATA";

export const viewArtistAction = (props) => ({
  type: VIEW_ARTIST,
  payload: props.obj,
});

export const viewAlbumAction = (props) => ({
  type: VIEW_ALBUM,
  payload: props.obj,
});

export const setRockData = (data) => ({
  type: SET_ROCK_DATA,
  payload: data,
});

export const setPopData = (data) => ({
  type: SET_POP_DATA,
  payload: data,
});

export const setHiphopData = (data) => ({
  type: SET_HIPHOP_DATA,
  payload: data,
});

export const addFavourite = (songTitle) => ({ type: "ADD_FAVOURITE", payload: songTitle });
export const remFavourite = (songTitle) => ({ type: "REM_FAVOURITE", payload: songTitle });
export const addToPlayer = (song) => ({ type: "ADD_TO_PLAYER", payload: song });

export const fetchData = async (artist, genre) => {
  try {
    let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data.data[0];
    } else {
      console.log("Error fetching data");
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

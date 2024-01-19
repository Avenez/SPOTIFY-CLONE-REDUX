import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtistPage from "./components/ArtistPage";
import Main from "./components/Main";
import Player from "./components/Player";
import TrackList from "./components/TrackList";
import SearchPage from "./components/Search";
import PageNotFound from "./components/PageNotFoud";
import SidebarOff from "./components/SidebarOff";
import YourLibrary from "./components/YourLibrary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarOff />
        <Player />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/album" element={<TrackList />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/search-page/:artistName" element={<SearchPage />} />
          <Route path="/YourLibrary" element={<YourLibrary />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/pageNonFound" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

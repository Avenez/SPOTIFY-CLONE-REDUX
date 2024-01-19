import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, addToPlayer, remFavourite, viewArtistAction } from "../redux/action";
import { AiOutlineHeart } from "react-icons/ai";
import TopNavLinks from "./TopNavLinks";

const TrackList = () => {
  const seeAlbum = useSelector((state) => state.main.album);
  const favSongs = useSelector((state) => state.favouriteSongs.favSongs);
  const dispatch = useDispatch();
  const [getTrackList, setGetTrackList] = useState([]);

  const Log = (song) => {
    dispatch(addFavourite(song));
    console.log(favSongs);
  };

  const idAlbum = seeAlbum.map((element) => {
    return element.album.id;
  });

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + idAlbum);
      if (res.ok) {
        let data = await res.json();
        setGetTrackList(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopNavLinks />
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="row">
          <Col className="col-md-3 pt-5 text-center" id="img-container">
            {seeAlbum.map((el) => {
              return (
                <div className="d-flex flex-column justify-content-center align-items-center" key={el.id}>
                  <img src={el?.album.cover_medium} alt="" />
                  <p className="mt-4 fw-bold text-white">{el.album.title}</p>
                  <Link onClick={() => dispatch()} to={"/artist"} className="text-white text-decoration-none">
                    {el.artist.name}
                  </Link>
                  <button id="btnPlay" className="btn btn-success mt-3" type="button">
                    Play
                  </button>
                </div>
              );
            })}
          </Col>
          <Col className="col-md-8 p-5">
            <Row className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {getTrackList?.tracks?.data?.map((song, index) => (
                  <Row className="d-flex align-items-center track-cursor " key={`song-id-${index}`}>
                    <Col xs={8} onClick={() => dispatch(addToPlayer(song))}>
                      <p className="text-white mt-3">{song.title}</p>
                    </Col>
                    <Col>
                      <p className="text-white ">
                        {favSongs.some((e) => e.title === song.title) ? (
                          <i
                            class="bi bi-heart-fill fs-5 text-success me-3"
                            onClick={() => dispatch(remFavourite(song.title))}
                          ></i>
                        ) : (
                          <i class="bi bi-heart fs-5 text-success me-3" onClick={() => Log(song)}></i>
                        )}
                        {Math.floor(parseInt(song.duration) / 60)}:
                        {parseInt(song.duration) % 60 < 10
                          ? "0" + (parseInt(song.duration) % 60)
                          : parseInt(song.duration) % 60}
                      </p>
                    </Col>
                  </Row>
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default TrackList;

import { Container, Row, Col } from "react-bootstrap";
import play from "../assets/Play.png";
import previous from "../assets/Previous.png";
import shuffle from "../assets/Shuffle.png";
import next from "../assets/Next.png";
import repeat from "../assets/Repeat.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, remFavourite } from "../redux/action";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const favSongs = useSelector((state) => state.favouriteSongs.favSongs);
  const song = useSelector((state) => state.songPlayer.songObj);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      {Object.keys(song).length > 0 ? (
        <Row className="row d-flex justify-content-md-center justify-content-sm-evenly  ">
          <Col xs={3}>
            <Row className="text-white">
              <Col xs={3}>
                <img src={song.album.cover_small} alt="albumImg" />
              </Col>
              <Col className="ps-1 ms-1">
                <h5>"{song.title}"</h5>
                <h6 className="d-flex align-items-top">
                  {song.artist.name}{" "}
                  {favSongs.some((e) => e.title === song.title) ? (
                    <i
                      class="bi bi-heart-fill fs-5 text-success ms-2"
                      onClick={() => dispatch(remFavourite(song.title))}
                    ></i>
                  ) : (
                    <i class="bi bi-heart fs-5 text-success ms-2" onClick={() => dispatch(addFavourite(song))}></i>
                  )}
                </h6>
              </Col>
            </Row>
          </Col>
          <Col xs={6} className=" playerControls mt-1">
            <Row>
              <audio>
                <source src={song.preview} type="audio/mp3" />
              </audio>
              <div className="d-flex justify-content-between">
                <Link className="player-buttons">
                  <img src={shuffle} alt="shuffle" />
                </Link>
                <Link className="player-buttons">
                  <img src={previous} alt="previous" />
                </Link>
                <Link className="player-buttons">
                  <img src={play} alt="play" />
                </Link>
                <Link className="player-buttons">
                  <img src={next} alt="next" />
                </Link>
                <Link className="player-buttons">
                  <img src={repeat} alt="repeat" />
                </Link>
              </div>
            </Row>
            <Row className="d-flex align-items-baseline justify-content-between  playBar py-3">
              <Col xs={1}>
                <p>0:00</p>
              </Col>
              <Col className="">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
              <Col xs={1}>
                <p>
                  {Math.floor(parseInt(song.duration) / 60)}:
                  {parseInt(song.duration) % 60 < 10
                    ? "0" + (parseInt(song.duration) % 60)
                    : parseInt(song.duration) % 60}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Player;

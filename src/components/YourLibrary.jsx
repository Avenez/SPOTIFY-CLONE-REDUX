import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, addToPlayer, remFavourite, viewArtistAction } from "../redux/action";
import { AiOutlineHeart } from "react-icons/ai";
import TopNavLinks from "./TopNavLinks";

const YourLibrary = () => {
  const favSongs = useSelector((state) => state.favouriteSongs.favSongs);
  const dispatch = useDispatch();

  return (
    <>
      <TopNavLinks />
      <Container>
        <Row className="col-12 col-md-9 offset-md-3 mainPage">
          <Col className="col-md-3 pt-5 text-center" id="img-container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                alt="profileImg"
              />
              <p className="mt-4 fw-bold text-white">I tuoi Brani Preferiti</p>
              <button id="btnPlay" className="btn btn-success mt-3" type="button">
                Play
              </button>
            </div>
          </Col>
          <Col className="col-md-8 p-5">
            <Row className="row">
              <div className="col-md-10 mb-5" id="trackList">
                {favSongs.map((song, index) => (
                  <Row
                    className="d-flex align-items-center track-cursor "
                    key={`song-id-${index}`}
                    onClick={() => dispatch(addToPlayer(song))}
                  >
                    <Col xs={8}>
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
                          <i class="bi bi-heart fs-5 text-success me-3" onClick={() => addFavourite(song)}></i>
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
      </Container>
    </>
  );
};

export default YourLibrary;

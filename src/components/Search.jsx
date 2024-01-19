import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [artist, setArtist] = useState();
  const params = useParams();

  const search = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + params.artistName);
      if (response.ok) {
        const data = await response.json();
        setArtist(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    search();
  }, [params]);

  return (
    <Container>
      <Row>
        <Col className="col-10 offset-md-2">
          <div id="searchResults">
            <h2>Search Results</h2>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3">
              {artist?.map((el, i) => (
                <Col className="col text-center" key={i}>
                  <Link to={"/album/" + el.id}>
                    <img className="img-fluid searchImg" src={el.album?.cover_medium} alt="1" />
                  </Link>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/album/" + el.album.id}>
                      Album:
                      {el.album?.title?.length < 16 ? `${el.album?.title}` : `${el.album?.title.substring(0, 16)}...`}
                      <br />
                    </Link>
                    <Link className="text-white text-decoration-none" to={"/artist/" + el.artist.name}>
                      Artist: {el.artist?.name}{" "}
                    </Link>
                  </p>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;

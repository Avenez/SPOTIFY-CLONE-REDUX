import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavLinks = () => {
  return (
    <Container>
      <Row lg={5} md={3} xs={2} className="mb-3 ">
        <Col className="mainLinks">
          <Link to={""}>TRENDING</Link>
        </Col>

        <Col className="mainLinks">
          <Link to={""}>PODCAST</Link>
        </Col>
        <Col className="mainLinks">
          <Link to={""}>MOODS AND GENRES</Link>
        </Col>
        <Col className="mainLinks">
          <Link to={""}>NEW RELEASES</Link>
        </Col>
        <Col className="mainLinks">
          <Link to={""}>DISCOVER</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavLinks;

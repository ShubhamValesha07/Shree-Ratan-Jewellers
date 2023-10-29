import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";



function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>{" "}
                to
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Shree Ratan Jewellers </strong>
              </h1>
              <div style={{ padding: 30 }} className="type">
              <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;

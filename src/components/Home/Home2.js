import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> NEW </span> Alert
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              🌟 Exciting news alert! ✨
              <i className="primary-header">
              🔔 Shree Ratan Jewellers 🔔  
              </i>{" "}
              is back with a ravishing makeover! 💎💍✨.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">💫 Step into our newly renovated shop </i> and experience the epitome of elegance and style. 💎✨
              <br />
              <br />Get mesmerised by our exquisite collection of jewellery that will leave you in absolute awe. 💍💖
              <i>
                <i className="primary-header">📅 Mark your calendars! Join us on [Date] at [Shop Address] to indulge in a world of timeless beauty and luxury. 💫🌟</i>
              </i>
              <br />
              <br />✨ Don't miss this golden opportunity to witness boundless glamour! {" "}
              <i className="primary-header"> See you there! ✨💎💫 </i> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH US
            </h1>
            <p data-aos="fade-left">Call us on <a href="tel:9428580191">9428580191</a> / <a href="tel:9426444881">9426444881</a></p>
            <ul className="home-about-social-links" data-aos="fade-up">
            <li className="social-icons">
                <a
                  href="https://www.instagram.com/shreeratanjewels_india/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:work.shubhamvalesha@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

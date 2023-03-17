import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import meicon from "../Components/image/meicon.jpg";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#40916c" }}>
        <Container>
          <Navbar.Brand>
            <Button
              //   style={{ borderRadius: "40px" }}
              variant="outline-dark"
              onClick={handleShow}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
                alt="error"
                width={30}
              />
            </Button>
            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ backgroundColor: "#d8f3dc" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{ marginLeft: "10px" }}>
                  Aigerim Burkanbekova
                </Offcanvas.Title>
              </Offcanvas.Header>
              <img
                src={meicon}
                alt="error"
                width={90}
                style={{
                  margin: "20px",
                  borderStartStartRadius: "90px",
                  borderTopRightRadius: "90px",
                  borderBottomLeftRadius: "90px",
                  borderEndEndRadius: "90px",
                  marginLeft: "130px",
                  border: "3px solid black",
                }}
              />{" "}
              <h5 style={{ marginLeft: "20px" }}>INFO</h5>
              <Offcanvas.Body>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3917/3917559.png"
                      alt="error"
                      width={25}
                    />
                    D.O.B
                  </h6>
                  <p>3 July 2002</p>
                </div>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1216/1216895.png"
                      alt="error"
                      width={25}
                    />{" "}
                    Address
                  </h6>
                  <p> st.Auezova 3, Bishkek , Kyrgyzstan</p>
                </div>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/104/104069.png"
                      alt="error"
                      width={25}
                    />{" "}
                    Email
                  </h6>
                  <p>burkanbekovaaigerim@gmail.com</p>
                </div>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/10043/10043073.png"
                      alt="error"
                      width={25}
                    />
                    ''Phone
                  </h6>
                  <p>+996 501 024 283</p>
                </div>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/717/717392.png"
                      alt="error"
                      width={25}
                    />
                    ''Instagram
                  </h6>
                  <p>aygerim_sdr</p>
                </div>
                <div>
                  <h6>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3046/3046125.png"
                      alt="error"
                      width={25}
                    />
                    ''TikTok
                  </h6>
                  <p>_aygerim__</p>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar.Brand>
          <Link style={{ textDecoration: "none" }} to="/home">
            <Navbar.Brand>Home page</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about-me">
            <Navbar.Brand>About me</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Navbar.Brand>Interesting</Navbar.Brand>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/project">
            <Navbar.Brand>Experince</Navbar.Brand>
          </Link>

          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Contacts
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Web developer</Dropdown.Item>
              <Dropdown.Item>
                burkanbekova
                <br />
                aigerim02@gmail.com
              </Dropdown.Item>
              <Dropdown.Item>+996501024283</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

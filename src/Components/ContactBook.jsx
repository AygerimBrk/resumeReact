import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProgressBar from "react-bootstrap/ProgressBar";

const ContactBook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1></h1>
      <div></div>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
        }}
      >
        <Card style={{ width: "28%", borderColor: "#1b4332" }}>
          <Card.Body>
            <h5>Fullstack ? Frontend ?</h5>
            "If you do not walk today , you will have to run tomorrow " <br /> I
            read this from instagram and it is really true , so now i going to
            for a walk with JS
            <br /> Yes , I am new to this profession and my path is frontend ,
            all I'm studying right now is html, css, js, and react.
          </Card.Body>
          <Button
            style={{ borderColor: "#40916c" }}
            variant="outline-dark"
            onClick={handleShow}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3916/3916912.png"
              alt="error"
              width={10}
            />
            /
            <img
              src="https://cdn-icons-png.flaticon.com/128/709/709586.png"
              alt="error"
              width={10}
            />
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>My current skills : </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                JavaScript :
                <ProgressBar variant="success" now={50} />
                CSS :
                <ProgressBar variant="info" now={36} />
                HTML :
                <ProgressBar variant="warning" now={48} />
                React :
                <ProgressBar variant="danger" now={50} />
              </div>
            </Offcanvas.Body>
            <Offcanvas.Header>
              <Offcanvas.Title>
                Also my future plan for fullstack :{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                Python :
                <ProgressBar variant="dark" now={100} />
                UX/UI :
                <ProgressBar variant="primary" now={100} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Card>
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "58px",
        }}
      >
        <Card style={{ margin: "90px" }}>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9071/9071894.png"
              alt="error"
              width={30}
            />{" "}
            From psychologist ...
          </Card.Header>
          <Card.Body>
            <Card.Title>Am I a psychologist ?</Card.Title>
            <Card.Text>
              Indeed, I was a psychology student once. So my love of medicine
              drove me to study psychology. I had a passion for studying
              medicine, but this soon resulted in burnout, making it impossible
              for me to continue. I therefore discontinued my studies.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ margin: "40px" }}>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            To web developer ...
            <img
              src="https://cdn-icons-png.flaticon.com/128/5050/5050212.png"
              alt="error"
              width={35}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title> Why web developer ? </Card.Title>
            <Card.Text>
              Because I can work from home without having much contact with
              others, which helps me protect my mental health.I was interested
              in this industry because I also enjoyed programming, how it
              changes the mind, and how designers create novel concepts.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          margin: "40px",
        }}
      >
        <Card style={{ margin: "60px" }}>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/924/924956.png"
              alt="error"
              width={35}
            />
            About me :{" "}
          </Card.Header>
          <Card.Body>
            <Card.Title>Who Am I ?</Card.Title>
            <Card.Text>
              I'm from Kyrgyzstan and my name is Aigerim Burkanbekova. Freshman
              web developer and future web designer . I have a range of hobbies,
              so check other pages to discover more about me.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ContactBook;

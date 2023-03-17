import React from "react";
import Card from "react-bootstrap/Card";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProgressBar from "react-bootstrap/ProgressBar";

const AboutMe = () => {
  return (
    <div>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <Card style={{ width: "50%" }}>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4836/4836901.png"
                alt="error"
                width={40}
              />{" "}
              A litle about me
            </h5>
          </Card.Header>

          <Card.Body>
            <Card.Title>
              {" "}
              I am a typical young woman who try achiev her goals.
            </Card.Title>
            I was born in Bishkek in 2002. By nation I am kyrgyz. My family is
            made up of a mother, a father, and a younger brother. I am the
            family's oldest child. <br /> I studied in Osh, in the southern
            region of Kyrgyzstan, for nearly seven years. And the remaining
            years, I stay in Bishkek.
          </Card.Body>

          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3074/3074058.png"
                alt="error"
                width={40}
              />{" "}
              A litle about my education
            </h5>
          </Card.Header>

          <Card.Body>
            <Card.Title> 2009-2016</Card.Title>
            My first school where I studied for 7 years in the south of
            Kyrgyzstan.
          </Card.Body>
          <Card.Body>
            <Card.Title> 2016-2020</Card.Title>
            My second school in the city of Bishkek where I graduated
          </Card.Body>
          <Card.Body>
            <Card.Title> 2020-2022</Card.Title>
            In Ala-Too University, I was a student. at the Psychology Faculty,
            but left behind
          </Card.Body>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9072/9072210.png"
                alt="error"
                width={40}
              />{" "}
              A litle about my experience
            </h5>
          </Card.Header>

          <Card.Body>
            <Card.Title>Translator</Card.Title>I got the chance to practice
            translating while I was a student.
          </Card.Body>
          <Card.Body>
            <Card.Title>Psychologist</Card.Title>I frequently had an internship
            because it was my profession.
          </Card.Body>
          <Card.Header style={{ backgroundColor: "#74c69d" }}>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9583/9583761.png"
                alt="error"
                width={40}
              />{" "}
              A litle about my hard and soft skills
            </h5>
          </Card.Header>

          <Card.Body>
            <Offcanvas.Header>
              <Offcanvas.Title>My hard and soft skills</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                Programming:
                <ProgressBar variant="success" now={20} />
                Word :
                <ProgressBar variant="info" now={50} />
                Canva :
                <ProgressBar variant="warning" now={70} />
                Editing :
                <ProgressBar variant="danger" now={50} />
                Creativity :
                <ProgressBar variant="dark" now={40} />
                Personality :
                <ProgressBar variant="success" now={60} />
                Punctuality :
                <ProgressBar variant="warning" now={70} />
                English :
                <ProgressBar variant="danger" now={50} />
                Russian :
                <ProgressBar variant="info" now={70} />
                Turkish :
                <ProgressBar variant="dark" now={40} />
              </div>
            </Offcanvas.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutMe;

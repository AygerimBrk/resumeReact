import React from "react";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <div>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "40px",
          marginTop: "100px",
        }}
      >
        <Card style={{ width: "28%", borderColor: "#1b4332" }}>
          <Card.Body>
            <h5>My first projects :</h5>
            <h6>
              <a
                style={{ textDecoration: "none", color: "green" }}
                href="https://github.com/AygerimBrk/card.git"
              >
                GitHub : Card
              </a>
            </h6>
            <h6>
              <a
                style={{ textDecoration: "none", color: "green" }}
                href="https://github.com/AygerimBrk/bookcard.git"
              >
                GitHub : BookCard
              </a>
            </h6>
            <h6>
              <a
                style={{ textDecoration: "none", color: "green" }}
                href="https://github.com/AygerimBrk/instagramCRUD.git"
              >
                GitHub : Instagram CRUD
              </a>
            </h6>
            <h6>
              <a
                style={{ textDecoration: "none", color: "green" }}
                href="https://github.com/AygerimBrk/ContactBookReact.git"
              >
                GitHub : Contact Book with React
              </a>
            </h6>
            <h6>
              <a
                style={{ textDecoration: "none", color: "green" }}
                href="https://github.com/AygerimBrk/Vlog-Navbar.git"
              >
                GitHub : Vlog - NavBar
              </a>
            </h6>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
// import img from "../Components/image/img1.jpg";

const Footer = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-evenly"
        style={{ border: "2px solid black" }}
      >
        <h5>Aigerim Burkanbekova CV : </h5>
        <div>
          <img
            style={{ margin: "5px" }}
            src="https://cdn-icons-png.flaticon.com/128/717/717392.png"
            alt="error"
            width={20}
          />
          <img
            style={{ margin: "5px" }}
            src="https://cdn-icons-png.flaticon.com/128/2111/2111828.png"
            alt="error"
            width={20}
          />
          <img
            style={{ margin: "5px" }}
            src="https://cdn-icons-png.flaticon.com/128/739/739260.png"
            alt="error"
            width={20}
          />
          <img
            style={{ margin: "5px" }}
            src="https://cdn-icons-png.flaticon.com/128/1946/1946552.png"
            alt="error"
            width={20}
          />
        </div>
      </div>
      <div style={{ border: "2px solid black" }}>
        <div>
          <img
            style={{
              marginLeft: "200px",
              marginBottom: "60px",
              marginTop: "60px",
            }}
            src="https://cdn-icons-png.flaticon.com/128/2085/2085229.png"
            alt="ww"
            width={60}
          />
          <h5></h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const Contact = () => {
  return (
    <div>
      {" "}
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
            <img
              src="https://cdn-icons-png.flaticon.com/128/4807/4807734.png"
              alt="error"
              width={30}
            />{" "}
            A litle about my hobbies
          </Card.Header>

          <Card.Body>
            <Card.Title></Card.Title>
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>My hobbies</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    I like reading novels{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2702/2702134.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Watching kdramas{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4221/4221420.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Cooking for myself{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2917/2917630.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Painting , but i can't drawing{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/103/103410.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Walking around{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2591/2591413.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Photography{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3059/3059241.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Yoga{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2785/2785354.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Riding horse{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5623/5623737.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td colSpan={2}>
                    Sleeping{" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9985/9985073.png"
                      alt="error"
                      width={30}
                    />{" "}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

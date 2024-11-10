import React, { useEffect, useState } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import CountWiget from "./CountWiget";

export default function ProfileBox() {
  const [useerData, setUserData] = useState({});

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("blogAppToken"));
    setUserData({ ...localStorageData });
  }, []);

  return (
    <div>
      <Card
        style={{
          width: "20rem",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <div
            style={{
              height: "10vw",
              width: "10vw",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
          </div>
        </div>
        <CardBody>
          <CardTitle tag="h5">{useerData.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            @{useerData.username}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CountWiget />
            <CountWiget />
            <CountWiget />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

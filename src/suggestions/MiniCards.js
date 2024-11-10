import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Badge,
} from "reactstrap";

export default function MiniCards() {
  return (
    <div>
      <Card
        style={{
          width: "19rem",
          display: "flex",
          paddingInline: "5px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <div
            style={{
              height: "4vw",
              width: "4vw",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <img alt="Sample" src="https://picsum.photos/300/200" />
          </div>

          <CardBody>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <CardTitle>Tapas Behera</CardTitle>
                <CardSubtitle className="text-muted" tag="h6">
                  @tapas_02
                </CardSubtitle>
              </div>
              <div style={{ marginLeft: "20%" }}>
                <Badge color="primary">Follow</Badge>
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

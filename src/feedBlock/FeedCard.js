import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Divider from "../common/Divider";
import { BsPencil } from "react-icons/bs";
import InteractionBlock from "./InteractionBlock";

export default function FeedCard({ data }) {
  return (
    <Card
      style={{
        width: "40rem",
        marginBottom: "10px",
      }}
    >
      {data && (
        <CardBody>
          <div
            className="mb-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  height: "3vw",
                  width: "3vw",
                  overflow: "hidden",
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
              </div>
              <div>
                <strong>{data.authorName}</strong>
                <CardSubtitle className=" text-muted">
                  {data.username}
                </CardSubtitle>
              </div>
            </div>
            <div>
              <BsPencil />
            </div>
          </div>
          <CardText>{data.article}</CardText>
          <Divider />
          <InteractionBlock />
        </CardBody>
      )}
    </Card>
  );
}

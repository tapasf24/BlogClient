import React, { useEffect } from "react";
import TopNav from "../topNav/Topnav";
import ProfileBlock from "../profileSegment/ProfileBlock";
import FeedBlock from "../feedBlock/FeedBlock";
import Suggestions from "../suggestions/Suggestions";

export default function Maindisplay() {
  useEffect(() => {
    const passkey = localStorage.getItem("blogAppPassKey");
    console.log("passkey:::::::::", passkey);
  });

  return (
    <div>
      <div style={{ display: "block", overflow: "hidden" }}>
        <div style={{ position: "sticky", top: 0 }}>
          <TopNav />
        </div>
        <div
          style={{
            width: "100%",
            height: "90vh",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "25vw",
              height: "100%",
            }}
          >
            <ProfileBlock />
          </div>
          <div>
            <FeedBlock />
          </div>
          <div>
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}

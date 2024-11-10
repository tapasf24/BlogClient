import React from "react";
import ProfileBox from "./ProfileBox";

export default function ProfileBlock() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProfileBox />
    </div>
  );
}

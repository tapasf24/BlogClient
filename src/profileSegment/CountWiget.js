import React from "react";

export default function CountWiget() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "8px",
      }}
    >
      <div style={{ fontSize: "15px", fontWeight: 500 }}>145</div>&nbsp;
      <div style={{ fontSize: "15px", fontWeight: 100 }}>Following</div>
    </div>
  );
}

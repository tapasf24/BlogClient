import React, { useEffect, useState } from "react";
import FeedCard from "./FeedCard";
import axios from "axios";

export default function FeedBlock() {
  const [blogList, setBlogList] = useState([]);

  const fetchBlogList = async () => {
    const localObject = JSON.parse(localStorage.getItem("blogAppToken"));
    const resp = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/get-feed`,
      {
        headers: { token: localObject.token },
      }
    );
    if (resp && resp.data && resp.data.length > 0) {
      setBlogList([...resp.data]);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "50vw",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <div>
        {blogList &&
          blogList.length > 0 &&
          blogList.map((item, index) => <FeedCard data={item} key={index} />)}
      </div>
    </div>
  );
}

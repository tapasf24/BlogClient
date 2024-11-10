import React, { useState } from "react";
import {
  BsHeart,
  BsChatDots,
  BsShare,
  BsBookmark,
  BsFillHeartFill,
} from "react-icons/bs";

export default function InteractionBlock() {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "10px",
      }}
    >
      <div role="button" tabIndex={0} onClick={() => setLiked(!liked)}>
        {liked ? <BsFillHeartFill color="red" /> : <BsHeart />}
      </div>
      <div>
        <BsChatDots role="button" />
      </div>
      <div>
        <BsShare role="button" />
      </div>
      <div>
        <BsBookmark role="button" />
      </div>
    </div>
  );
}

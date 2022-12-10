import { Button, Avatar } from "@mui/material";
import React from "react";
import "../../css/Tweetbox.css"
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" />
          <input placeholder="what's happening?" type="text" />
          {/*<input placeholder="what's happening?" type="text" />*/}
        </div>
        <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

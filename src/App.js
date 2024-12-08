// App.js
import React, { useState } from "react";
import "./App.css";

const Comment = ({
  username,
  timestamp,
  text,
  votes,
  hasReplies,
  profileId,
  children,
}) => {
  const [showReplies, setShowReplies] = useState(true);

  return (
    <div className="comment">
      <div className="profile-container">
        <img
          src={`https://i.pravatar.cc/28?u=${profileId}`}
          alt="profile"
          className="profile-photo"
        />
        <div className="comment-content">
          <div className="comment-details">
            <div className="user-info">
              <span className="username">{username}</span>
              <span className="timestamp">{timestamp}</span>
            </div>
            <p className="comment-text">{text}</p>
          </div>
          <div className="comment-footer">
            <span className="footer-action">Reply</span>
            <span className="footer-action">Share</span>
            <span className="footer-action">Report</span>
            <span className="footer-action">Save</span>
            <span className="footer-action">Follow</span>
          </div>
        </div>
      </div>

      {hasReplies && (
        <>
          <div className="line-container">
            <div className="threading-line">
              {showReplies && <div className="comment-branch" />}
            </div>
          </div>
          <div className="replies-container">
            <button
              className="toggle-replies"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? "−" : "+"}
            </button>
            {showReplies && <div className="replies">{children}</div>}
          </div>
        </>
      )}
    </div>
  );
};
const App = () => {
  return (
    <div className="comment-section">
      <Comment
        username="User123"
        timestamp="8h"
        text="This is a main comment with multiple replies"
        profileId="1"
        hasReplies
      >
        <Comment
          username="Replier1"
          timestamp="7h"
          text="This is a reply to the main comment"
          profileId="2"
          hasReplies
        >
          <Comment
            username="Replier2"
            timestamp="6h"
            text="This is a nested reply"
            profileId="3"
          />
        </Comment>
        <Comment
          username="Replier3"
          timestamp="5h"
          text="This is another reply to the main comment"
          profileId="4"
        />
      </Comment>
    </div>
  );
};
export default App;

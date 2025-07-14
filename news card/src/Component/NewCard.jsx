import React from "react";

function NewsCard(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.head}</h5>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
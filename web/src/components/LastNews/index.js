import React from "react";
import Card from "../Card";
import "./lastnews.css";

const LastNews = () => {
  return (
    <div className="lastnews">
      <h1 className="article-title">ULTIMAS NOTÍCIAS</h1>
      <hr className="article-spacing"/>
      <div className="lastnews-card-container">
       <Card className="card-last"/>
       <Card className="card-last"/>
       <Card className="card-last"/>
      </div>
    </div>
  )
}

export default LastNews;

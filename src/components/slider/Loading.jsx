import React from "react";
import "./loading.css";

const Loading = () => {
  
  const progress = document.querySelector(".progress");

  progress.addEventListener("click", () => {
    const value = Math.floor(Math.random() * 100);
    progress.style.setProperty("--progress", `${value}%`);
  });

  return (
    <div className="progress">
      <div className="bar">
        <div className="progress-value"></div>
      </div>
    </div>
  );
};

export default Loading;

import React, { useState } from "react";
import text1 from "./data.js";

const LoadMoreButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState(text1);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setParagraphs((paragraphs) => [...paragraphs, ...text1]);
      setIsLoading(false);
    }, 1000); // Thay thế bằng thời gian tải thực tế
  };

  return (
    <div>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Đang tải..." : "Tải thêm"}
      </button>
    </div>
  );
};

export default LoadMoreButton;

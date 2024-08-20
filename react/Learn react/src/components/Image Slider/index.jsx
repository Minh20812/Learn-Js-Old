import { useState } from "react";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import "./styles.css";

export default function ImageSlider() {
  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  // Event handlers
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log(images[currentIndex]);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    console.log(images[currentIndex]);
  };
  return (
    <div className="image-slider">
      <div className="image-container">
        <img src={images[currentIndex]} alt={images[currentIndex]} />
      </div>
      <div className="controls">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

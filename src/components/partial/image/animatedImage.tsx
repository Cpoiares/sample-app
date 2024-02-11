import React, { useState } from 'react';
import './animatedImage.css';

type AnimatedImageProps = {
    imgRef: string;
}

const AnimatedImage = ({imgRef} : AnimatedImageProps) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className={`spinning-image ${isSpinning ? 'spin' : ''}`} onClick={handleImageClick}>
      <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={imgRef} alt="Spinning Image" />
    </div>
  );
};

export default AnimatedImage;
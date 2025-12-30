import React, { useRef, useState, useEffect } from 'react';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight,
  containerWidth,
  imageHeight,
  imageWidth,
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
  className = '',
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -rotateAmplitude;
    const rotateY = (mouseX / rect.width) * rotateAmplitude;

    setTransform({
      rotateX,
      rotateY,
      scale: isHovering ? scaleOnHover : 1,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setTransform((prev) => ({ ...prev, scale: scaleOnHover }));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-[272.5px] rounded-b-[24px]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[272.5px] rounded-b-[24px] opacity-0 hover:opacity-100 transition-opacity duration-300">
            {overlayContent}
          </div>
        )}
        {showTooltip && captionText && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-sm rounded-b-[24px] opacity-0 hover:opacity-100 transition-opacity duration-300">
            {captionText}
          </div>
        )}
      </div>
    </div>
  );
};

export default TiltedCard;


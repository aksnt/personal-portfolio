import React, { useState } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const gradient = `radial-gradient(circle at ${position.x}px ${position.y}px, #fff, #000)`;

  return (
    <div
      className="mouse-tracker"
      onMouseMove={handleMouseMove}
      style={{ background: gradient }}
    />
  );
};

export default MouseTracker;

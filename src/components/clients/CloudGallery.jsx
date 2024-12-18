import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CloudGallery = ({ entries }) => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;

    if (!sphere) return;

    const radius = 150;
    const tags = [...sphere.children];

    // Function to calculate the initial position of each tag
    const calculatePosition = () => {
      const len = tags.length;
      tags.forEach((tag, i) => {
        const phi = Math.acos(-1 + (2 * i) / len);
        const theta = Math.sqrt(len * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      });
    };

    // Function to rotate each tag on its own orbit
    const rotateTags = () => {
      tags.forEach((tag, i) => {
        const rotationSpeedX = Math.random() * 0.01 + 0.001; // Random rotation speed for each tag
        const rotationSpeedY = Math.random() * 0.01 + 0.001;

        const rotateX = (Math.PI / 500) * i + rotationSpeedX;
        const rotateY = (Math.PI / 500) * i + rotationSpeedY;

        tag.style.transform += ` rotateX(${rotateX}rad) rotateY(${rotateY}rad)`;
      });

      requestAnimationFrame(rotateTags);
    };

    calculatePosition();
    rotateTags();
  }, [entries]);

  return (
    <div className="tagcloud-container">
      <div ref={sphereRef} className="tagcloud-sphere">
        {entries.map((entry, index) => (
          <img
            key={index}
            src={entry.image}
            alt={entry.alt || `Tag ${index}`}
            className="tagcloud-tag"
          />
        ))}
      </div>
    </div>
  );
};

CloudGallery.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default CloudGallery;

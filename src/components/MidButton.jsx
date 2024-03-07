import React, { useState, useEffect } from "react";

export const MidButton = ({ label, setActiveButton, activeButton }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activeButton === label);
  }, [activeButton, label]);

  const handleButtonClick = () => {
    setActiveButton(label);
  };

  return (
    <div>
      <p
        className={`px-6 underline-offset-8 ${
          isActive ? "text-blue-700 underline" : "text-black"
        }`}
        onClick={handleButtonClick}
      >
        {label}
      </p>
    </div>
  );
};

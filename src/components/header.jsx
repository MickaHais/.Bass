import React, { useState } from 'react';

const logo = "./src/assets/logo.png";
const rightImageHover = "./src/assets/lampeorange.png";
const rightImage = "./src/assets/Reflector_BulbHeader.png";
const rightImageClick = "./src/assets/lampeorange.png";

const Header = () => {
  const [currentRightImage, setCurrentRightImage] = useState(rightImage);

  const handleMouseOver = () => {
    setCurrentRightImage(rightImageHover);
  };

  const handleMouseOut = () => {
    setCurrentRightImage(rightImage);
  };

  const handleClick = () => {
    setCurrentRightImage(rightImageClick);
  };

  return (
    <header className="drop-shadow-[0_0px_10px_rgba(236,60,76,1)] w-full bg-white rounded-b-lg p-4 flex justify-between items-center h-16 z-10">
      <img src={logo} alt="Logo" className="h-10" />
    </header>
  );
};

export default Header;

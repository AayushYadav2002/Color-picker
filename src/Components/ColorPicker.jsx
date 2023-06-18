import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleButtonClick = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <button
        style={{color: selectedColor}}
        className={`relative  ${selectedColor ? `text-[#${selectedColor}]` : 'text-black'} flex items-center justify-center px-5 py-3 rounded-lg bg-gray-300   focus:outline-none ` }
        onClick={handleButtonClick}
      >
        {selectedColor && (
          <span
            className="absolute -top-2 -left-2 w-6 h-6 rounded-full"
            style={{ backgroundColor: selectedColor }}
          ></span>
        )}
        {selectedColor ? (
          <span className="font-mono font-bold text-sm">{selectedColor}</span>
        ) : (
          <span className="font-mono font-bold">Pick a color</span>
        )}
      </button>
      {isColorListVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-70"></div>
          <div className="bg-white p-6 rounded-lg relative z-10">
            <ul className="grid grid-cols-10 gap-2">
              {colors.map((color) => (
                <li
                  key={color}
                  style={{
                    backgroundColor: color,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleColorClick(color)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

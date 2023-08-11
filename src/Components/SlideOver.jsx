// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SlideOver = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle the slide-over */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Toggle Slide-Over
      </button>

      {/* Slide-over backdrop */}
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        ></div>
      )}

      {/* Slide-over panel */}
      <div
        className={`fixed top-0 right-0 w-1/3 h-full bg-white z-20 ${
          isOpen ? 'ease-in-out duration-500 opacity-100' : 'ease-in-out duration-500 opacity-0'
        }`}
      >
        {/* Your slide-over content goes here */}
        <div className="p-4">
          <h2 className="text-xl font-bold">Slide-Over Content</h2>
          <p className="text-gray-600">Add your content here...</p>
        </div>
      </div>
    </>
  );
};


export default SlideOver;

import React from "react";

const ButtonGroup = ({
  button1Text,
  button2Text,
  onButton1Click,
  onButton2Click,
  className,
}) => {
  return (
    <div
      className={`flex items-center justify-center bg-[#ffffff0e] backdrop-blur-[2px] border border-white/20 rounded-full overflow-hidden shadow-lg shadow-[#00000094] ${className}`}
    >
      <button
        className="px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
        onClick={onButton1Click}
      >
        {button1Text}
      </button>
      <div className="w-px h-6 bg-white/30"></div>
      <button
        className="px-8 py-3 text-base font-medium bg-[#f57a23b2] text-white hover:bg-[#F5A974] transition-colors duration-300"
        onClick={onButton2Click}
      >
        {button2Text}
      </button>
    </div>
  );
};

export default ButtonGroup;

import React from "react";
import GlassSurface from "./GlassSurface";

const ButtonGroup = ({
  button1Text,
  button2Text,
  onButton1Click,
  onButton2Click,
  className,
}) => {
  return (
    <GlassSurface
      className={`flex items-center justify-center rounded-full overflow-hidden shadow-lg ${className}`}
      borderRadius={9999}
      height={60}
      width={340}
      style={{ padding: 0, width: 340, background: "rgba(245, 122, 35, 0.18)" }}
      backgroundOpacity={0.18}
    >
      <button
        className="px-8 py-3 text-base font-medium text-white bg-(#f57a23b2) bg-clip-padding backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 rounded-l-full"
        onClick={onButton1Click}
      >
        {button1Text}
      </button>
      <div className="w-px h-6 bg-white/30"></div>
      <button
        className="px-8 py-3 text-base font-medium text-white bg-[#f57a23b2]/40 bg-clip-padding backdrop-blur-sm border border-white/20 hover:bg-[#f57a23b2]/60 transition-colors duration-300 rounded-r-full"
        onClick={onButton2Click}
      >
        {button2Text}
      </button>
    </GlassSurface>
  );
};

export default ButtonGroup;

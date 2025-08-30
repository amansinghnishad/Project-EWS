import React from "react";
import CardShell from "./CardShell";

const NoticeList = ({ title }) => (
  <CardShell className="min-h-[440px] md:min-h-[440px] flex flex-col shadow-inner">
    <h3 className="text-xl font-bold text-[#ffffff] text-center mb-4">
      {title}
    </h3>
    <div
      className="overflow-y-auto h-[23rem] pr-2 no-scrollbar"
      data-scrollable="true"
    >
      <div className="space-y-4">
        <div className="bg-stone-400/20 rounded-2xl h-20">1</div>
        <div className="bg-stone-400/20 rounded-2xl h-20">2</div>
        <div className="bg-stone-400/20 rounded-2xl h-20">3</div>
        <div className="bg-stone-400/20 rounded-2xl h-20">4</div>
        <div className="bg-stone-400/20 rounded-2xl h-20">5</div>
      </div>
    </div>
  </CardShell>
);

export default NoticeList;

import React from "react";
import NoticeList from "./Notice/NoticeList";
import ManagementCard from "./Notice/ManagementCard";

const NoticeGrid = () => {
  return (
    <section className="w-full text-stone-200 bg-[linear-gradient(to_bottom,#492900_0%,transparent_50%)]">
      <div className="max-w-[90%] mx-auto px-2 sm:px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NoticeList title="Public Notice" />
          <ManagementCard />
          <NoticeList title="Student Notice" />
        </div>
      </div>
    </section>
  );
};

export default NoticeGrid;

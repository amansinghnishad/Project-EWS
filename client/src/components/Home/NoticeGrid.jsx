import React, { useRef, useState } from "react";

const useTilt = () => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 16;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };
  const onLeave = () =>
    setStyle({ transform: `perspective(900px) rotateX(0deg) rotateY(0deg)` });

  return { ref, style, onMove, onLeave };
};

const CardShell = ({ children, className = "" }) => {
  const tilt = useTilt();
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      className={`relative rounded-2xl border border-black/10 bg-black/5 backdrop-blur-sm shadow-xl transition-transform duration-200 ${className}`}
      style={{ willChange: "transform", ...tilt.style }}
    >
      {/* Shine */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent" />
      <div className="relative p-6">{children}</div>
    </div>
  );
};

const NoticeList = ({ title, items = [] }) => (
  <CardShell className="min-h-[340px] md:min-h-[380px]">
    <h3 className="text-xl font-bold text-[#141413] mb-2">{title}</h3>
    <ul className="space-y-2 text-[#141413]/90 text-sm list-disc list-inside">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
    <div className="mt-4">
      <a
        href="/contact"
        className="inline-block px-3 py-1.5 rounded-lg bg-emerald-500/90 text-gray-900 font-semibold hover:bg-emerald-400 transition"
      >
        View all
      </a>
    </div>
  </CardShell>
);

const people = [
  {
    name: "Aman Singh",
    role: "Founder",
    color: "from-emerald-400 to-cyan-400",
  },
  {
    name: "Priya Sharma",
    role: "Program Lead",
    color: "from-fuchsia-400 to-pink-400",
  },
  {
    name: "Ravi Kumar",
    role: "Community",
    color: "from-amber-400 to-orange-400",
  },
];

const Person = ({ name, role, color }) => (
  <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition">
    <div
      className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-gray-900 font-bold`}
    >
      {name[0]}
    </div>
    <div>
      <div className="text-[#1b1b1a] font-semibold leading-tight">{name}</div>
      <div className="text-[#1b1b1a] text-xs">{role}</div>
    </div>
  </div>
);

const ManagementCard = () => (
  <CardShell className="min-h-[340px] md:min-h-[380px]">
    <h3 className="text-xl font-extrabold text-[#0c0c0c] text-center">
      EWS Management
    </h3>
    <p className="text-center text-[#0c0c0c] text-sm mt-1">
      Committed people guiding our mission
    </p>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
      {people.map((p) => (
        <Person key={p.name} {...p} />
      ))}
    </div>
  </CardShell>
);

const NoticeGrid = () => {
  return (
    <section className="w-full bg-[#ffffff] text-[#070707]">
      <div className="max-w-[90%] mx-auto px-2 sm:px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NoticeList
            title="Public Notice"
            items={[
              "Annual meet on 24th Aug",
              "Community drive next week",
              "New blog post: Growth",
            ]}
          />
          <ManagementCard />
          <NoticeList
            title="For Students"
            items={[
              "Scholarship portal open",
              "Workshop: UI/UX Basics",
              "Mentor slots available",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default NoticeGrid;

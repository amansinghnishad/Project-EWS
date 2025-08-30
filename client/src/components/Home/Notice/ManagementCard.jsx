import React, { useState } from "react";
import CardShell from "./CardShell";
import ButtonGroup from "../../common/ButtonGroup";

const ManagementCard = () => {
  const [index, setIndex] = useState(0);
  const people = [
    { name: "Aman Singh", role: "Founder", email: "aman@example.com" },
    { name: "Priya Sharma", role: "Program Lead", email: "priya@example.com" },
    {
      name: "Ravi Kumar",
      role: "Community Manager",
      email: "ravi@example.com",
    },
    {
      name: "Sunita Devi",
      role: "Volunteer Coordinator",
      email: "sunita@example.com",
    },
    { name: "Anil Kapoor", role: "Advisor", email: "anil@example.com" },
  ];
  const person = people[index];

  return (
    <CardShell className="min-h-[440px] md:min-h-[440px] flex flex-col justify-between">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#ffffff]">{person.role}</h3>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="w-[200px] h-[250px] bg-stone-400/20 rounded-2xl mb-4"></div>
        <h4 className="text-lg font-semibold text-[#ffffff]">{person.name}</h4>
      </div>
      <div className="flex justify-center">
        <ButtonGroup
          button1Text={"View Profile"}
          button2Text={"Send Message"}
          value={person.email}
          onButton2Click={() => console.log(person.email)}
          className="mb-4 "
        />
      </div>
      <div className="flex justify-center gap-2">
        {people.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-6 bg-stone-800"
                : "w-2.5 bg-stone-400/80 hover:bg-stone-500"
            }`}
          />
        ))}
      </div>
    </CardShell>
  );
};

export default ManagementCard;

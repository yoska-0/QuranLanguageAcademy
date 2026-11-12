import React from "react";

const futersDescription = [
  {
    id: 1,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 2,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 3,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 4,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 5,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 6,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
  {
    id: 7,
    icon: "",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas.",
  },
];

const OurFutres = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {futersDescription.map((futer) => (
        <div
          key={futer.id}
          className="flex gap-4 items-center text-center bg-(--gold) px-4 py-6 rounded-md"
        >
          <span>{futer.icon}</span>
          <p>{futer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurFutres;

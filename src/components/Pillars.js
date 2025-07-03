import React from "react";

const pillars = [
  {
    title: "Partnership",
    icon: "🤝",
    desc: "Building bridges, creating lasting impact.",
  },
  {
    title: "Integrity",
    icon: "🛡️",
    desc: "Professionalism and ethics in all we do.",
  },
  {
    title: "Innovation",
    icon: "💡",
    desc: "Applying technology and participatory approaches.",
  },
  {
    title: "Capacity Building",
    icon: "📈",
    desc: "Strengthening institutions and communities.",
  },
];

function Pillars() {
  return (
    <>
      <h2 className="section-title">Our Pillars</h2>
      <div className="pillars">
        {pillars.map((pillar) => (
          <div className="pillar-card" key={pillar.title}>
            <div className="icon">{pillar.icon}</div>
            <div className="pillar-title">{pillar.title}</div>
            <div className="pillar-desc">{pillar.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pillars;

import React from "react";
import { Link } from "react-router-dom";

const pillars = [
  {
    title: "Research",
    icon: "🔬",
    desc: "Delivering data-driven insights and actionable knowledge for impactful solutions.",
  },
  {
    title: "Consultancy",
    icon: "🧩",
    desc: "Expert guidance and strategy tailored to address diverse development challenges.",
  },
  {
    title: "Program",
    icon: "📊",
    desc: "Designing, implementing, and managing programs that drive real-world progress.",
  },
  {
    title: "Training",
    icon: "🎓",
    desc: "Building capacity and empowering individuals and organizations for sustainable growth.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Putting Ideas Into Action</h1>
          <p>Global Leaders in Research, Consultancy & Program Solutions</p>
          <Link to="/contact" className="cta">
            Request a Consultation
          </Link>
          <div className="hero-contact">
            📞 +254 722 275 535 | ✉️ horizoninsightltd@gmail.com
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section section--tight">
        <div className="max-width">
          <h2 className="section-title">Who We Are</h2>
          <p>
            <b>Pyramid Research & Consultancy Group Ltd (PRCG LTD)</b> is a premier research and consultancy firm, boasting over 15 years of experience both locally and internationally. Our expertise spans food security, livelihoods, health, nutrition, water, sanitation, microfinance, gender, and sustainable development.
          </p>
        </div>
      </section>

      {/* Our Pillars - World Class Section */}
      <section className="section blue-bg section--tight-top">
        <div className="max-width">
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
            Our Pillars
          </h2>
          <div className="pillars">
            {pillars.map((pillar) => (
              <div className="pillar-card" key={pillar.title}>
                <div className="icon">{pillar.icon}</div>
                <div className="pillar-title">{pillar.title}</div>
                <div className="pillar-desc">{pillar.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
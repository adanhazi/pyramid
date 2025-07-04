import React from "react";

const values = [
  {
    title: "Partnership",
    icon: "🤝",
    desc: "Building bridges and creating lasting impact through collaboration.",
  },
  {
    title: "Integrity",
    icon: "🛡️",
    desc: "Upholding the highest standards of ethics and professionalism.",
  },
  {
    title: "Innovation",
    icon: "💡",
    desc: "Driving solutions with cutting-edge ideas and modern technology.",
  },
  {
    title: "Capacity Building",
    icon: "📈",
    desc: "Empowering communities and organizations for sustainable success.",
  },
];

const whyus = [
  "15+ years of proven excellence",
  "Multidisciplinary expert team",
  "Track record with major INGOs",
  "Rapid, quality field data collection",
  "Technology-driven solutions",
];

function About() {
  return (
    <div>
      {/* About Us Main Section */}
      <section className="section section--tight-top section--tight">
        <div className="max-width">
          <h2 className="section-title">About Us</h2>
          <p>
            Pyramid Research & Consultancy Group Ltd is registered in Kenya as a leading provider of research, consultancy, program, and training services.
            <br /><br />
            Our areas of expertise include food security and livelihood, microfinance, health, nutrition, WASH, environment, capacity building, gender analysis, disaster risk reduction, and more.
            <br /><br />
            We build partnerships with leading organizations, delivering innovative and sustainable solutions for communities and institutions across Africa.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="section blue-bg section--tight-top">
        <div className="max-width">
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>Our Values</h2>
          <div className="pillars">
            {values.map((val) => (
              <div className="pillar-card" key={val.title}>
                <div className="icon">{val.icon}</div>
                <div className="pillar-title">{val.title}</div>
                <div className="pillar-desc">{val.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section dark-bg" style={{ paddingTop: "2.3rem" }}>
        <div className="max-width">
          <h2 className="section-title" style={{ color: "#fff", marginBottom: "2.2rem" }}>Why Choose Us</h2>
          <div className="whyus-grid">
            {whyus.map((item) => (
              <div className="why-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
import React from "react";
import "./Services.scss"; // optional: separate SCSS for big pages

const services = [
  {
    title: "Food Security & Livelihood",
    icon: "🍚",
    desc: "Ensuring sustainable access to food and improved livelihoods for communities."
  },
  {
    title: "Health & Nutrition",
    icon: "🩺",
    desc: "Promoting health, nutrition, and well-being through targeted interventions."
  },
  {
    title: "Monitoring & Evaluation",
    icon: "📊",
    desc: "Measuring progress, learning, and accountability for development programs."
  },
  {
    title: "Gender Analysis & Mainstreaming",
    icon: "♀️",
    desc: "Advancing gender equity and integrating gender perspectives into projects."
  },
  {
    title: "Resource Mapping",
    icon: "🗺️",
    desc: "Identifying and visualizing resources to inform planning and decisions."
  },
  {
    title: "Water & Sanitation",
    icon: "💧",
    desc: "Improving access to clean water and adequate sanitation facilities."
  },
  {
    title: "Environmental Impact Assessment",
    icon: "🌍",
    desc: "Assessing project impact on the environment for sustainable outcomes."
  },
  {
    title: "Peace Building & Governance",
    icon: "🕊️",
    desc: "Fostering peace, stability, and good governance within communities."
  },
  {
    title: "Disaster Risk Reduction (DRR)",
    icon: "🚨",
    desc: "Minimizing risks and building resilience to natural and human-made disasters."
  },
  {
    title: "Sustainable Livelihoods",
    icon: "🌱",
    desc: "Empowering communities with lasting, resilient economic opportunities."
  },
  {
    title: "Change Management",
    icon: "🔄",
    desc: "Expert guidance for organizations navigating transformation and growth."
  },
  {
    title: "Climate Change & CDM Initiatives",
    icon: "♻️",
    desc: "Implementing clean development and climate change mitigation strategies."
  },
  {
    title: "Socio-Economic Development",
    icon: "🏢",
    desc: "Driving inclusive growth and improving quality of life for all."
  }
];

function Services() {
  return (
    <section className="services-section">
      <div className="max-width">
        <h1 className="services-hero-title">Our Services</h1>
        <p className="services-hero-sub">
          Empowering organizations and communities through evidence-based solutions and expert consultancy.
        </p>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-title">{service.title}</div>
              <div className="service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
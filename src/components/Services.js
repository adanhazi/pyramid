import React from "react";

const services = [
  {
    title: "Research & Evaluation",
    details: [
      "Food Security & Livelihood Assessments",
      "Health & Nutrition Surveys (SMART, SQUEAC, etc.)",
      "Monitoring & Evaluation",
      "Environmental & Social Impact Studies",
    ],
  },
  {
    title: "Consultancy & Program Design",
    details: [
      "Program & Project Cycle Management",
      "Community Development",
      "Change Management",
      "Peace Building & Governance",
    ],
  },
  {
    title: "Training & Capacity Building",
    details: [
      "Leadership Development",
      "Strategic Planning Workshops",
      "Results-Based Management Training",
    ],
  },
  {
    title: "Specialized Services",
    details: [
      "Microfinance & Enterprise Development",
      "ICT Solutions & Digital Transformation",
      "Disaster Risk Reduction",
      "Environmental Conservation",
    ],
  },
];

function Services() {
  return (
    <>
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-title">{service.title}</div>
            <ul>
              {service.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;

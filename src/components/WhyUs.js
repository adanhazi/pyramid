import React from "react";

const whyus = [
  "15+ years of proven excellence",
  "Multidisciplinary expert team",
  "Track record with major INGOs",
  "Rapid, quality field data collection",
  "Technology-driven solutions",
];

function WhyUs() {
  return (
    <>
      <h2 className="section-title" style={{ color: "#fff" }}>
        Why Choose Us?
      </h2>
      <div className="whyus-grid">
        {whyus.map((item) => (
          <div className="why-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyUs;

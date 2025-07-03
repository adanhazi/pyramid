import React from "react";

const partners = [
  "World Vision",
  "CARE International",
  "Save the Children",
  "Norwegian Refugee Council",
  "Trocaire",
  "Medair",
  "Danish Refugee Council",
];

function Partners() {
  return (
    <>
      <h2 className="section-title">Our Partners</h2>
      <div className="partners-row">
        {partners.map((name) => (
          <div className="partner-badge" key={name}>
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Partners;

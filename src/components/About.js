import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <h2 className="section-title">Who We Are</h2>
        <p>
          <b>Pyramid Research & Consultancy Group Ltd (PRCG LTD)</b> is a premier research and consultancy firm, boasting over 15 years of experience both locally and internationally. Our expertise spans food security, livelihoods, health, nutrition, water, sanitation, microfinance, gender, and sustainable development.
        </p>
        <p>
          We have proudly partnered with leading organizations including World Vision, CARE, Save the Children, and more to deliver lasting impact to communities and institutions.
        </p>
      </div>
      <img
        className="about-img"
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
        alt="Teamwork"
      />
    </div>
  );
}

export default About;

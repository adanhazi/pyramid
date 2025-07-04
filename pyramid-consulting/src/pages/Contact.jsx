import React, { useRef } from "react";

function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    formRef.current.reset();
  };
  return (
    <section className="section blue-bg">
      <div className="max-width">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-flex">
          <div className="contact-details">
            <b>Pyramid Research & Consultancy Group Ltd</b>
            <br />
            Town House, Standard Street, Nairobi
            <br />
            Kisumu Office: Varsity Plaza, 1st Floor, Jomo Kenyatta Highway
            <br />
            P.O BOX 10051, G.P.O Nairobi, KENYA
            <br />
            <br />
            📞 <b>+254 722 275 535</b>
            <br />
            ✉️ <b>horizoninsightltd@gmail.com</b>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required rows={4} />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
import React from "react";
import Layout from "../components/layout/layout";
import Lottie from 'lottie-react';
import animationData from '../Styles/Animation.json';
import '../Styles/Contact.css'; // Import your CSS file for Contact component

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-image">
            <Lottie animationData={animationData} style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <p>Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form action="https://formsubmit.co/bangadegaurav@gmail.com" method="POST">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Your message here" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

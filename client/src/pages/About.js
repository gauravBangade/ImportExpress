import React from 'react'
import Layout from '../components/layout/layout'
import "../Styles/about.css"

const About = () => {
  return (
    <Layout title={'About-Import Express'}>
      <div className="about-container">
        <div className="about-content">
          <header className="about-header">
            <h1>About Import Express</h1>
          </header>
          <main className="about-main">
            <section className="about-section" id="mission">
              <h2>Our Mission</h2>
              <p>At Import Express, our mission is to bring the world closer to you by offering a curated selection of rare and exclusive products sourced from various countries. We believe in celebrating diversity and cultural richness through our platform, allowing you to discover and connect with extraordinary finds that are not easily accessible elsewhere.</p>
            </section>
            <section className="about-section" id="offer">
              <h2>What We Offer</h2>
              <p>Our platform features a diverse range of products, including art, crafts, artifacts, culinary delights, and more. Each product is carefully selected to provide you with a one-of-a-kind shopping experience, whether you're looking for a unique gift or a special treat for yourself.</p>
            </section>
            <section className="about-section" id="how">
              <h2>How We Do It</h2>
              <p>We leverage the latest technologies and innovations to enhance your shopping experience. Our intuitive AI chatbot, 'ExpressMate,' is here to assist you every step of the way, providing personalized recommendations and guidance to help you find the perfect products.</p>
            </section>
            <section className="about-section" id="commitment">
              <h2>Our Commitment</h2>
              <p>We are committed to providing you with a seamless and enjoyable shopping experience. From our user-friendly interface to our secure payment processing, we strive to make your experience with Import Express exceptional.</p>
            </section>
            <section className="about-section" id="join">
              <h2>Join Us</h2>
              <p>Join us on this journey of exploration and discovery as we bring the world's unique treasures to your doorstep. Shop with us today and experience the world like never before.</p>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default About

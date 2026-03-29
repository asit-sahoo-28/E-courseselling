import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">

      {/* HERO SECTION */}

      <section className="about-hero">
        <h1>About Our Learning Platform</h1>
        <p>
          We are committed to providing high-quality online education that helps
          students build real skills for the modern tech industry. Our platform
          focuses on practical learning, industry-relevant projects, and
          career-oriented courses.
        </p>
      </section>


      {/* MISSION & VISION */}

      <section className="about-cards">

        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <p>
            Our mission is to make quality education accessible to everyone and
            help students gain practical skills that prepare them for real
            industry challenges.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Our Vision</h3>
          <p>
            We aim to become a leading digital learning platform where students
            can master modern technologies like Web Development, AI, Data
            Science, and more.
          </p>
        </div>

        <div className="about-card">
          <h3>👨‍🏫 Expert Instructors</h3>
          <p>
            Our courses are created and taught by industry professionals with
            real-world experience, ensuring that every student learns practical
            and job-ready skills.
          </p>
        </div>

      </section>


      {/* WHY CHOOSE US */}

      <section className="why-us">

        <h2>Why Choose Our Platform?</h2>

        <div className="why-grid">

          <div className="why-box">
            📚 Industry Relevant Courses
          </div>

          <div className="why-box">
            💻 Hands-on Projects
          </div>

          <div className="why-box">
            🎓 Career Focused Learning
          </div>

          <div className="why-box">
            🌍 Learn Anytime Anywhere
          </div>

        </div>

      </section>

    </div>
  );
};

export default About;

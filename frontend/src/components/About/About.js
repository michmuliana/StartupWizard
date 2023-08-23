import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>
        What's the inspiration behind StartupWizard, you might wonder? Visualize
        it as more than a business toolkit – imagine it as your gateway to the
        world of startups. This app is designed to assist individuals in
        tackling the challenges of crafting business plans, empowering them to
        seize opportunities as they arise, just as Sun Tzu's once said,
        "Opportunities multiply as they are seized."
      </p>

      <h2>Meet the Dev</h2>
      <div className="dev-profile">
        <img
          src={process.env.PUBLIC_URL + "/images/dev-avatar.jpeg"}
          alt="Developer"
          className="dev-profile"
        />
        <p>
          Artist at heart, Michelle possesses a unique blend of skills as a
          Business Administration and Computer Science student. Her expertise
          not only encompasses the realms of Full Stack and Mobile app
          development but also extends to the intricate art of crafting business
          plans. Through firsthand experience, she understands the struggles
          individuals face in creating comprehensive business plans.
        </p>
      </div>
    </div>
  );
}

export default About;

import React from "react";

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Welcome to our About page! Here, you can learn more about our mission,
        goals, and values.
      </p>

      <h3>Meet the Dev</h3>
      <div className="dev-profile">
        <img src="dev-avatar.jpg" alt="Developer" />
        <p>
          Hi, I'm [Dev Name]! I'm passionate about coding and building amazing
          web applications.
        </p>
      </div>
    </div>
  );
}

export default About;

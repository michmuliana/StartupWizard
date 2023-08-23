import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="logo-container">
        <h1>StartupWizard</h1>
        <img
          src={process.env.PUBLIC_URL + "/images/startupwizard-logo.png"}
          alt="StartupWizard Logo"
          className="logo-image"
        />
      </div>

      <p>
        Generate business plans faster with AI by transforming your ideas into
        actionable strategies.
      </p>
      <button className="home-button">Get Started</button>
    </div>
  );
}

export default Home;

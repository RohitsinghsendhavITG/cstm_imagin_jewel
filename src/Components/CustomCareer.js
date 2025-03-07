import React, { useEffect, useState } from "react";
import "../ComponentsCss/CustomCareer.css";

export default function CustomCareer() {
  const statsData = [
    { id: "stat1", end: 86, label: "Of our team are women" },
    { id: "stat2", end: 500, label: "Trustpilot Reviews" },
    { id: "stat3", end: 5, label: "Stores" },
    { id: "stat4", end: 11, label: "Years of Journey" },
  ];

  const [stats, setStats] = useState(
    statsData.map((stat) => ({ id: stat.id, value: 0 }))
  );

  useEffect(() => {
    const duration = 1500;
    statsData.forEach((stat) => {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        let progress = (currentTime - startTime) / duration;
        if (progress > 1) progress = 1;

        let newValue = Math.floor(progress * stat.end);
        setStats((prevStats) =>
          prevStats.map((s) => (s.id === stat.id ? { ...s, value: newValue } : s))
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, []);

  return (
    <>
    <div className="custom_career_section">
      <div className="careers-header">
        <h2>Careers</h2>
        <p>
          Are you passionate about jewelry? Are you ready to make your mark on the industry and join an expanding
          company in need of talented people like yourself? The answer is yes! Find out our open positions below and
          join our journey.
        </p>
      </div>

      <div className="stats-section">
        <div className="page-width">
          <div className="stats-section-inner">
            <h2>WE'D LOVE TO WORK WITH YOU!</h2>
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <h5>
                    <span>{stat.value}</span>
                    {stat.id === "stat2" ? "+" : "%"}
                  </h5>
                  <span className="box-content">{statsData[index].label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="open-positions">
        <h2>Open Positions</h2>
        <ul>
          <li>
            <a href="#">Flexi-job / Student (NL)</a>
          </li>
          <li>
            <a href="#">Flexi-job / Étudiants (FR)</a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

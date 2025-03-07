import React from "react";
import "../ComponentsCss/CustomMulticolumn.css";

import Everyday_luxury_img from "../Assets/Images/CustomMultiColumnImages/everyday-luxury.png"; 
import Materials_img from "../Assets/Images/CustomMultiColumnImages/materials.png"; 
import Fair_pricing_img from "../Assets/Images/CustomMultiColumnImages/fair-pricing.png"; 

export default function CustomMulticolumn() {
  const columns = [
    { imgSrc: Everyday_luxury_img , alt: "Everyday Luxury", title: "EVERYDAY LUXURY", link: "#", linkText: "DISCOVER" },
    { imgSrc: Materials_img , alt: "Materials", title: "MATERIALS", link: "#", linkText: "DISCOVER" },
    { imgSrc: Fair_pricing_img , alt: "Fair Pricing", title: "FAIR PRICING", link: "#", linkText: "DISCOVER" }
  ];

  return (
    <div className="cstm_multicolumn_outer">
      <div className="page-width">
        <div className="cstm_multicolumn_inner">
          <h2 className="section-title">HOW WE DO IT</h2>
          <div className="grid-container">
            {columns.map((column, index) => (
              <div key={index} className="grid-item">
                <img src={column.imgSrc} alt={column.alt} />
                <div className="card_contents">
                  <h3>{column.title}</h3>
                  <a href={column.link}>{column.linkText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

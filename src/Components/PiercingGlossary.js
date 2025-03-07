import React from "react";
import "../ComponentsCss/PiercingGlossary.css";

export default function PiercingGlossary() {
  const piercings = [
    { number: "1", name: "The Lobe", healing: "8 weeks - 3 months" },
    { number: "2", name: "Stacked Lobe", healing: "8 weeks - 3 months" },
    { number: "3", name: "Upper Lobe", healing: "8 weeks - 3 months" },
    { number: "4", name: "Lower Helix", healing: "3 - 9 months" },
    { number: "5", name: "Helix", healing: "3 - 9 months" },
    { number: "6", name: "Flat", healing: "3 - 9 months" },
    { number: "7", name: "Conch", healing: "3 - 9 months" },
    { number: "8", name: "Forward Helix", healing: "3 - 9 months" },
    { number: "9", name: "Tragus", healing: "3 - 9 months" },
  ];

  return (
    <div className="piercing_glossary_section section_padding">
      <div className="piercing_glossary_section_wrapper page-width">
        <div className="glossary_text">
          <h2 className="heading">PIERCING GLOSSARY</h2>
          <p>
            The piercing studio offers nine types of ear piercings. Healing time
            varies based on your chosen piercing placement. Some placements are
            not able to be pierced due to the design of our flat back labrets.
          </p>
          <ul>
            {piercings.map((piercing) => (
              <li key={piercing.number}>
                <strong>
                  {piercing.number}. {piercing.name}
                </strong>
                <br />
                <span>Healing time: {piercing.healing}</span>
              </li>
            ))}
          </ul>
          <button className="button button--secondary">AFTERCARE GUIDE</button>
        </div>

        <div className="image-content">
          <img
            src="//www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=1500"
            alt=""
            srcSet="//www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=165 165w, //www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=360 360w, //www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=535 535w, //www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=750 750w, //www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=1070 1070w, //www.imaginjewels.com/cdn/shop/files/piercing_glossary_1.png?v=1728638583&amp;width=1500 1500w"
            width="1500"
            height="1500"
            loading="lazy"
            sizes="(min-width: 1440px) 670px,
              (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
            fetchPriority="auto"
          />
        </div>
      </div>
    </div>
  );
}

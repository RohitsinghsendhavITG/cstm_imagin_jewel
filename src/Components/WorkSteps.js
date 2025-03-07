import React from "react";
import "../ComponentsCss/WorkSteps.css";
export default function WorkSteps() {
  const steps = [
    {
      number: "1",
      title: "STEP ONE",
      description:
        "Book your appointment online by selecting your preferred piercing studio in Waterloo, Brussels, Gent, Liège or Antwerpen. Select the kind of piercing placement you’d like. You’ll find a piercing glossary on this page with all possible options. If you’re not sure yet, select ‘undecided’.",
    },
    {
      number: "2",
      title: "STEP TWO",
      description:
        "Go to your appointment, get advised on the choice of your new luxury piercing by our expert style consultants. They will talk you through the whole process and answer all the questions you have.",
    },
    {
      number: "3",
      title: "STEP THREE",
      description:
        "Get pierced with a beautiful, luxury piercing and receive a little treat as a reward! Enjoy your brand new piercing & make sure to follow the aftercare guidelines.",
    },
  ];

  return (
    <div className="work_step_section section_padding">
      <div className="work_step_section_wrapper page-width">
        <p className="sub_heading">GETTING PIERCED IN OUR STUDIOS</p>
        <h2 className="heading">HOW DOES IT WORK?</h2>
        <div className="image_with_text_container">
        <div className="mid_container">
          <div className="image-content">
          <img src="//www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=1500" alt="" srcSet="//www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=165 165w, //www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=360 360w, //www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=535 535w, //www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=750 750w, //www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=1070 1070w, //www.imaginjewels.com/cdn/shop/files/Untitled_design_24_6db21056-635a-43e6-9bd2-af16604d8ca8.png?v=1706101400&amp;width=1500 1500w" width="1500" height="1500" loading="lazy" sizes="(min-width: 1440px) 670px,
              (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" fetchPriority="auto"/>
          </div>
          <div className="steps-section">
            {steps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="button-container">
            <a href="#" className="button button--primary">
              BOOK HERE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

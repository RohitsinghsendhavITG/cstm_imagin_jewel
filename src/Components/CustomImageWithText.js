import React from "react";
import "../ComponentsCss/CustomImageWithText.css";
export default function CustomImageWithText() {
  return (
    <>
      <div className="custom_image_with_text_section page-width" id="book-now">
        <div className="section_wrapper">
          {/* Text Content */}
          <div className="text-content">
            <div className="text-content_wrapper">
              <p>Our piercing service</p>
              <h2>DISCOVER OUR PIERCING STUDIOS</h2>
              <a href="/pages/appointment-1" className="button button--primary">
                BOOK YOUR SPOT
              </a>
            </div>
          </div>
          {/* Image Content */}
          <div className="image-content">
            <div className="image-content_wraper">
              <img
                src="//www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=1500"
                alt=""
                srcSet="
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=165   165w,
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=360   360w,
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=535   535w,
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=750   750w,
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=1070 1070w,
                  //www.imaginjewels.com/cdn/shop/files/Untitled_design_-_2022-04-04T080928.489.png?v=1649052590&width=1500 1500w
                "
                width="1500"
                height="1266"
                sizes="(min-width: 1440px) 670px,
            (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                fetchPriority="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

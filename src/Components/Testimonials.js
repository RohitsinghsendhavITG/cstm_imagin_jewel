import React from "react";
import "../ComponentsCss/Testimonials.css";

export default function Testimonials() {
  const star_svg = (
    <svg
      enableBackground="new 0 0 511.998 511.998"
      width="16"
      fill="#FFA800"
      viewBox="0 0 511.998 511.998"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d="m414.168 500.62-158.169-83.155-158.169 83.155 30.207-176.121-128.037-124.735 176.86-25.689 79.139-162.697 79.139 162.697 176.86 25.689-128.037 124.734z"></path>
        </g>
      </g>
    </svg>
  );

  const testimonials = [
    {
      image:
        "https://www.imaginjewels.com/cdn/shop/files/image5-1_jTgN_3ff0ac27-659f-4fed-8201-d08b6f2dfbab_large.png?v=1705303371",
      rating: 5,
      text: "I recently had my upper lobe pierced at I.Ma.Gi.N. in Brussels. I have been impressed with the customer service and found the employees at I.Ma.Gi.N. to be very responsive, professional and kind.",
      name: "Liz",
      role: "Our customer",
    },
    {
      image:
        "https://www.imaginjewels.com/cdn/shop/files/img-86851_DNXe_313fc20b-371a-4d5e-875a-dadb1e0adc4f_large.png?v=1705303370",
      rating: 5,
      text: "Great service! Amazing place to get pierced, beautiful space. It's a calming space, which helps when you're nervous. Beautiful jewelry to choose from and kind lady who places the piercing in a professional way.",
      name: "Kim",
      role: "Our customer",
    },
  ];

  return (
    <div className="testimonials_section section_padding">
      <div className="testimonials_section_wrapper page-width">
        <h4>TESTIMONIALS</h4>
        <h2>WHAT DO OUR CUSTOMERS THINK?</h2>

        <div className="testimonials_container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src={testimonial.image}
                alt={`Review by ${testimonial.name}`}
              />
              <div className="testimonial_text">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>{star_svg}</span> 
                  ))}
                </div>
                <p>{testimonial.text}</p>
                <p className="author">{testimonial.name}</p>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCss/StoreServices.css";
import antwerp_img from "../Assets/Images/StoreServicesImages/antwerp.png";
import brussels_img from "../Assets/Images/StoreServicesImages/brussels.png";
import ghent_img from "../Assets/Images/StoreServicesImages/ghent.png";
import liege_img from "../Assets/Images/StoreServicesImages/liege.png";
import waterloo_img from "../Assets/Images/StoreServicesImages/waterloo.png";
import free_gift_packaging_logo from "../Assets/Images/StoreServicesImages/free-gift-packaging.png";
import free_engraving_logo from "../Assets/Images/StoreServicesImages/free-engraving.png";
import get_pierced_logo from "../Assets/Images/StoreServicesImages/get_pierced.png";

export default function StoreServices() {
  const storeLocations = [
    { id: "service", name: "SERVICE" },
    { id: "antwerp", name: "ANTWERP" },
    { id: "brussels", name: "BRUSSELS" },
    { id: "ghent", name: "GHENT" },
    { id: "liege", name: "LIÈGE" },
    { id: "waterloo", name: "WATERLOO" },
    { id: "knokke", name: "KNOKKE" },
  ];

  const storeDetails = [
    {
      id: "antwerp",
      imgSrc: antwerp_img,
      name: "Antwerp",
      address: ["Steenhouwersvest 11,", "2000 Antwerp"],
      phone: "+32 3 297 03 83",
      timing: {
        day: "Tuesday - Saturday:",
        time: "10:30 - 18:00",
        off_day: "Open every 1st Sunday of the month: 13:00 - 18:00",
      },
    },
    {
      id: "brussels",
      imgSrc: brussels_img,
      name: "Brussels",
      address: ["Rue du Bailli 83,", "1050 Brussels"],
      phone: "+32 2 721 96 26",
      timing: {
        day: "Tuesday - Saturday:",
        time: "11:00 - 18:30",
      },
    },
    {
      id: "ghent",
      imgSrc: ghent_img,
      name: "Ghent",
      address: ["Kortedagsteeg 17,", "9000 Ghent"],
      phone: "+32 9 344 24 41",
      timing: {
        day: "Tuesday - Saturday:",
        time: "10:30 - 18:00",
        extra: "Monday: 13:00 - 18:00",
        off_day: "Open every first Sunday of the month from 13h - 18h.",
      },
    },
    {
      id: "liege",
      imgSrc: liege_img,
      name: "Liège",
      address: ["Rue Saint Adalbert 9,", "4000 Liège"],
      phone: "+32 4 222 98 34",
      announce: "Closed for annual holiday from 4/2 - 8/2",
      timing: {
        day: "Tuesday - Saturday:",
        time: "10:00 - 18:00",
      },
    },
    {
      id: "waterloo",
      imgSrc: waterloo_img,
      name: "Waterloo",
      address: ["Chaussée de Bruxelles 165,", "1410 Waterloo"],
      phone: "+32470947806",
      timing: {
        day: "Tuesday - Saturday:",
        time: "10:00 - 18:00",
      },
    },
  ];

  return (
    <>
      <div className="custom_store_services section_padding">
        <div className="custom_store_services_wrapper page-width">
          <div className="cstm_rich_text">
            <div className="store-intro-rich-text">
              <p>
                We're excited to welcome you in our stores!
                <br />
                Come by to discover the latest collections, get pierced or get
                styling advice.
                <br />
                See you soon?
              </p>
            </div>
          </div>

          <div className="store_locator_nav_wrapper">
            <div className="store_locator_nav_inner">
              <div className="store-locations">
                {storeLocations.map((location) => (
                  <a
                    key={location.id}
                    href={`#${location.id}`}
                    className="store_location_btn"
                  >
                    {location.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="services-container icon_with_text">
            <div className="icon_with_text_content">
              <div className="service-box">
                <img src={free_gift_packaging_logo} alt="Gift" />
                <h3>FREE GIFT PACKAGING</h3>
              </div>
              <div className="service-box">
                <img src={free_engraving_logo} alt="Engraving" />
                <h3>FREE ENGRAVING IN ALL OUR STORES</h3>
              </div>
              <div className="service-box">
                <img src={get_pierced_logo} alt="Piercing" />
                <h3>GET PIERCED IN ALL OUR STORES</h3>
                <p>
                  Book your appointment <Link to="/appointment">here</Link>.
                  <br />
                  Walk-ins are welcome!
                </p>
              </div>
            </div>
          </div>
          <div className="image_with_details_wrapper">
            <div className="image_with_details_main">
              {storeDetails.map((store) => (
                <div
                  key={store.id}
                  className="image_with_details"
                  id={store.id}
                >
                  <div className="block_image">
                    <img src={store.imgSrc} alt="" />
                  </div>
                  <div className="block_content">
                    <h3 className="image_with_details_inline">{store.name}</h3>
                    <p className="announce_text">
                      <em>{store.announce}</em>
                    </p>
                    <div className="block_deatils">
                      <div className="left_side_content">
                        {store.address.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))}
                        <p>
                          <strong>{store.phone}</strong>
                        </p>
                      </div>
                      <div className="right_side_content">
                        <p>
                          <strong>OPENING HOURS</strong>
                        </p>
                        {store.timing.extra && (
                          <p className="extra">{store.timing.extra}</p>
                        )}
                        <p className="day">{store.timing.day}</p>
                        <p className="time">{store.timing.time}</p>
                        {store.timing.off_day && (
                          <p>
                            <em className="off_day">{store.timing.off_day}</em>
                          </p>
                        )}
                      </div>
                    </div>
                    <a href="#" className="block_content_btn">
                      VIEW STORE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

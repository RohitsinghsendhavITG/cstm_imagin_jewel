import React from "react";
import "../ComponentsCss/StoreLocator.css";
export default function StoreLocator() {
    const navigationLinks = [
      { href: "#book-now", text: "Book now" },
      { href: "#how-does-it-work", text: "How does it work?" },
      { href: "#our-piercing", text: "Our piercings" },
      { href: "#reviews", text: "Reviews" },
      { href: "#piercing-glossary", text: "Piercing glossary" },
      { href: "#faq", text: "Faq" },
      { href: "#our-locations", text: "Our locations" }
    ];
  
    return (
      <div className="custom_store_locator">
        <div className="store_locator_nav_wrapper">
          <div className="page-width">
            <div className="store_locator_nav_inner">
              <ul className="pageNavigationButton">
                {navigationLinks.map((link, index) => (
                  <li key={index} className={`locator_nav locator_nav${index + 1}`}>
                    <a href={link.href} className="button button--primary">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
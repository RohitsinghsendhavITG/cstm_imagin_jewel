import React from "react";
import "../ComponentsCss/JewelryRowBlocks.css";

import forteen_k_gold_img from "../Assets/Images/JewelryRowBlocksImages/14k-gold.png";
import gold_vermeil_img from "../Assets/Images/JewelryRowBlocksImages/gold-vermeil.png";
import sterling_silver_img from "../Assets/Images/JewelryRowBlocksImages/sterling_silver.png";
const jewelryItems = [
  {
    id: "row_1",
    imgSrc: forteen_k_gold_img,
    title: "14k Gold",
    description:
      "Our solid gold pieces are made to last forever. 14k gold will not oxidize or discolor, so you can wear your jewelry everyday, everywhere. We design and test every piece to withstand the normal rigors of everyday wear, but also to be handled with care. Even something as strong as gold deserves some care. To maintain its shine, scrub lightly with a toothbrush and warm water.",
  },
  {
    id: "row_2",
    imgSrc: gold_vermeil_img,
    title: "Gold Vermeil",
    description:
      "Avoid sweat and water by removing your gold vermeil jewelry before exercising or showering. All our vermeil jewelry can be replated for free one year after purchase. After this period, we ask a small replating fee. It is important that you store your jewelry in a safe and dry place, away from direct sunlight. Clean your jewelry with a jewelry polishing cloth, anything other may cause scratches.",
  },
  {
    id: "row_3",
    imgSrc: sterling_silver_img,
    title: "Sterling Silver",
    description:
      "Avoid water when wearing your piece, because over time sterling silver will oxidize. Sterling Silver is H20 sensitive, however; the oils on your skin help keep sterling silver from oxidizing faster. So wear your favorite piece often. To minimize oxidation, it is important that you store your jewelry in a safe and dry place, away from direct sunlight.",
  },
];

export default function JewelryRowBlocks() {
  return (
    <>
      <div className="jwelery_row_blocks">
        <div className="image_with_content_outer">
          <div className="page-width">
            <div className="image_with_content_inner">
              <div className="image_with_contents_all">
                {jewelryItems.map((item) => (
                  <div
                    key={item.id}
                    className="img_with_content_single_row"
                    id={item.id}
                  >
                    <div className="img_container">
                      <img src={item.imgSrc} alt={item.title} />
                    </div>
                    <div className="single_row_content">
                      <h2>{item.title}</h2>
                      <div className="single_row_paracontent">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

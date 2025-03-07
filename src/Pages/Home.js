import React from "react";
import CustomImageWithText from "../Components/CustomImageWithText";
import CustomMulticolumn from "../Components/CustomMulticolumn";
import StoreLocator from "../Components/StoreLocator";
import StoreServices from "../Components/StoreServices";
import JewelryRowBlocks from "../Components/JewelryRowBlocks";
import CustomCareer from "../Components/CustomCareer";
import WorkSteps from "../Components/WorkSteps";
import PiercingGlossary from "../Components/PiercingGlossary";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <>
      <CustomCareer />
      <StoreLocator />
      <CustomImageWithText />
      <CustomMulticolumn />
      <StoreServices />
      <JewelryRowBlocks />
      <WorkSteps />
      <PiercingGlossary />
      <Testimonials />
    </>
  );
}

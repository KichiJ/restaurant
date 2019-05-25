import React from "react";
import "./AboutBlock.css";
import Block from "../Block/Block";

function AboutBlock() {
  return (
    <Block>
      <span className="about__title">About</span>
      <span className="about__description">
        At Smooth's, our mission is simple: enhance and educate the palate with
        the freshest ingredients and flavors, while surprising and exciting each
        guest with personal care and service. For us, sustainability is not a
        lofty idea but a fundamental, and necessary, endeavor. Our concept is
        about the food and drink of course, but it’s also about our team, our
        facilities, our practices, and the hundreds of decisions we make each
        day that affect the world around us.
      </span>
    </Block>
  );
}

export default AboutBlock;

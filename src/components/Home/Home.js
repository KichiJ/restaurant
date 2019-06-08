import React from "react";
import "./Home.css";
import ImgCover from "../ImgCover/ImgCover";
import OverlapCard from "../OverlapCard/OverlapCard";
import ReservationBlock from "../ReservationBlock/ReservationBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import FoodDescBlock from "../FoodDescBlock/FoodDescBlock";
import header from "../../assets/images/photo-1523905330026-b8bd1f5f320e.jpeg";
import counter from "../../assets/images/photo-1470256699805-a29e1b58598a.jpeg";
import entrance from "../../assets/images/photo-1527289810489-1c2e6f5bb929.jpeg";
import cover1 from "../../assets/images/photo-1516211881327-e5120a941edc.jpeg";
import sweetSourPork from "../../assets/images/sweetsour.jpg";
import kungPaoChicken from "../../assets/images/kung-pao-chicken2.jpg";
import maPoTofu from "../../assets/images/Mapo-Tofu.jpg";
import wontons from "../../assets/images/red-oil-wonton.jpg";

function Home() {
  return (
    <div className="home">
      <ImgCover img={header}>
        <span className="header__name">Smooth</span>
        <span className="header__description">Chinese Specialities</span>
      </ImgCover>
      <OverlapCard>
        <div className="section01">
          <ReservationBlock />
          <img src={counter} alt="restaurant counter" className="img" />
          <img src={entrance} alt="restaurant entrance" className="img" />
          <AboutBlock />
        </div>
      </OverlapCard>
      <ImgCover img={cover1}>
        <span className="section02__title">Our specialities</span>
      </ImgCover>
      <OverlapCard>
        <div className="food__grid">
          <FoodDescBlock
            name="Sweet and Sour Pork"
            description="It consists of large thinly sliced pieces of chicken pork in potato starch batter, deep-fried twice until crispy."
            price="from $20.99"
            column="1/2"
            row="1/2"
          />
          <img
            src={sweetSourPork}
            alt="sweet and sour pork"
            className="img__c1__r2"
          />
          <FoodDescBlock
            name="Kung Pao Chicken"
            description="The major ingredients are diced chicken, dried chili, and fried peanuts."
            price="from $15.99"
            column="2/3"
            row="2/3"
          />
          <img
            src={kungPaoChicken}
            alt="kung pao chicken"
            className="img__c2__r1"
          />
          <FoodDescBlock
            name="Ma Po Tofu"
            description="Ma (麻) describes a spicy and hot taste which comes from pepper powder, one kind of condiment usually used in Chuan Cuisine."
            price="from $18.99"
            column="3/4"
            row="1/2"
          />
          <img src={maPoTofu} alt="ma po tofu" className="img__c3__r2" />
          <FoodDescBlock
            name="Wontons"
            description="Wontons are commonly boiled and served in soup or sometimes deep-fried. The filling of wontons can be minced pork or diced shrimp."
            price="from $16.99"
            column="4/5"
            row="2/3"
          />
          <img src={wontons} alt="wontons" className="img__c4__r1" />
        </div>
      </OverlapCard>
    </div>
  );
}

export default Home;

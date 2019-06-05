import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import OverlapCard from "../OverlapCard/OverlapCard";
import ReservationBlock from "../ReservationBlock/ReservationBlock";
import img1 from "../../assets/images/photo-1470256699805-a29e1b58598a.jpeg";
import img2 from "../../assets/images/photo-1527289810489-1c2e6f5bb929.jpeg";
import img3 from "../../assets/images/sweetsour.jpg";
import AboutBlock from "../AboutBlock/AboutBlock";
import FoodDescBlock from "../FoodDescBlock/FoodDescBlock";

function Home() {
  return (
    <div className="home">
      <Header />
      <OverlapCard>
        <div className="section01">
          <ReservationBlock />
          <img src={img1} alt="restaurant" className="img img1" />
          <img src={img2} alt="restaurant" className="img" />
          <AboutBlock />
        </div>
      </OverlapCard>
      <div className="section02">
        <span className="section02__title">Our specialities</span>
      </div>
      <OverlapCard>
        <div className="food__grid">
          <FoodDescBlock
            name="Sweet and Sour Pork"
            description="It consists of large thinly sliced pieces of chicken pork in potato starch batter, deep-fried twice until crispy."
            price="from $20.99"
          />
          <img src={img3} alt="sweet-and-sour pork" className="img__c1__r2" />
        </div>
      </OverlapCard>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import OverlapCard from "../OverlapCard/OverlapCard";
import ReservationBlock from "../ReservationBlock/ReservationBlock";
import img1 from "../../assets/images/photo-1470256699805-a29e1b58598a.jpeg";
import img2 from "../../assets/images/photo-1527289810489-1c2e6f5bb929.jpeg";
import AboutBlock from "../AboutBlock/AboutBlock";

function Home() {
  return (
    <div className="home">
      <Header />
      <OverlapCard>
        <div className="section--01">
          <ReservationBlock />
          <img src={img1} alt="restaurant" className="img img1" />
          <img src={img2} alt="restaurant" className="img" />
          <AboutBlock />
        </div>
      </OverlapCard>
      <p>Hello</p>
    </div>
  );
}

export default Home;

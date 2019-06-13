import React from "react";
import { useInView } from "react-intersection-observer";
import "./Menu.css";
import Underline from "../Underline/Underline";
import MenuItem from "../MenuItem/MenuItem";

function Menu() {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true
  });
  return (
    <div className="menu">
      <span className="menu__title">Menu</span>
      <Underline color={"var(--gold)"} />
      <p className="menu__section">Food & Aperitives</p>
      <div className={`menu__grid ${inView && "fromBottom"}`} ref={ref}>
        <MenuItem
          name="Dumpling"
          description="Dumplings (饺子) consist of minced meat and chopped vegetables wrapped into a thin piece of dough skin."
          price="15€"
        />
        <MenuItem
          name="Stir-fried Noodles"
          description="Stir-fried dish consists of noodles, meat (usually chicken, beef, shrimp, or pork), onions and celery."
          price="12€"
        />
        <MenuItem
          name="Spring Rolls"
          description="Dim sum of cylindrical shape. The filling of spring rolls could be vegetables or meat, and the taste could be either sweet or savory."
          price="10€"
        />
        <MenuItem
          name="Peking Roasted Duck"
          description="Roasted duck with thin and crispy skin and considered as one of China’s national dishes."
          price="14€"
        />
        <MenuItem
          name="Szechwan Chili Chicken"
          description="It is loaded with pungent spices like brown pepper. red chillies, ginger, green chillies and white pepper."
          price="13€"
        />
      </div>
      <p className="menu__section">Desserts</p>
      <div className={`menu__grid ${inView2 && "fromBottom"}`} ref={ref2}>
        <MenuItem
          name="Almond Cookies"
          description="The dough is rolled into a log, then sliced and topped with a single almond."
          price="3€"
        />
        <MenuItem
          name="Sweet Nian Gao"
          description="It is made from a glutinous brown sugar cake that's wrapped in pastry and deep fried."
          price="4€"
        />
        <MenuItem
          name="Snowflake Cake"
          description="Light, ​refreshing, and served cold, this molded mixture of either raspberries or coconut milk along with gelatin, potato starch, sugar, and cream."
          price="5€"
        />
      </div>
    </div>
  );
}

export default Menu;

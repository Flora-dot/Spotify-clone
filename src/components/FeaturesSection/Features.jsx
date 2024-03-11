import Styles from "./Features.style.module.css";

import { features } from "./data";

export const Features = () => { 
  return (
    <section className={Styles["premium-section"]}>
      <h1>The power of Premium</h1>
      <div className={Styles["offers-container"]}>
      {features.map((feature) => (
        <div className={Styles["item"]}>
            <img src={feature.image} alt="icons" className={Styles["item-icon"]} />
            <h5>{feature.title}</h5>
            <p>{feature.description}</p>
        </div>
      ))}
      </div>
    </section>
  );
};

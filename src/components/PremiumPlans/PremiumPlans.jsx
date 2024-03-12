import Styles from "./style.module.css";
import CustomButton from "../CustomButton";
import { DebitCards } from "./DebitCards";
import { plans } from "./data";
import CheckIcon from "../../assets/icons/check-icon.svg";

export const PremiumPlans = () => {
  return (
    <section className={Styles["plans-section"]}>
      <h1>Pick your Premium</h1>
      <p className={Styles["title"]}>
        Listen without limits on your phone, speaker, and other devices.
      </p>
      <div className={Styles["card-icons"]}>
        <DebitCards />
      </div>
      <div className={Styles["premium-plans"]}>
        {plans.map((plan) => (
          <div className={Styles["plan-card"]}>
            {plan.title !== "Mini" && (
              <CustomButton
                children={"1 month free"}
                className={Styles["free-duration-btn"]}
              />
            )}
            <CustomButton
              children={"One-time plans available"}
              className={Styles["plans-btn"]}
            />
            <h5 className={Styles["plan-title"]}>{plan.title}</h5>
            <p>{plan.duration}</p>
            <p>{plan.account}</p>
            {plan.title === "Mini" ? (
              <hr className={Styles["hr-mini"]} />
            ) : (
              <hr className={Styles["hr"]} />
            )}
            <ul>
              {plan.offers.map(
                (offer, index) =>
                  // Render list item only if feature exists
                  offer && (
                    <span>
                      <img src={CheckIcon} alt="" />
                      <li key={index}>{offer}</li>
                    </span>
                  )
              )}
            </ul>
            <CustomButton className={Styles['view-plans-btn']} children={'VIEW PLANS'}/>
            <hr className={Styles["second-line"]} />
            <a href="#/terms">
              Terms and conditions apply.
              <span>
                {plan.title !== "Mini" &&
                  " 1 month free not available for users who have already tried Premium."}
              </span>
            </a>
          </div>
        ))}
      </div>
      <div className={Styles["discount-section"]}>
        <h6 className={Styles["discount-title"]}>
          Special discount for eligible students in university
        </h6>
        <CustomButton
          className={Styles["learn-more-btn"]}
          children={"Learn more"}
        />
      </div>
    </section>
  );
};

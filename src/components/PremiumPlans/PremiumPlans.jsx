import style from "./style.module.css";
import CustomButton from "../CustomButton";
import { DebitCards } from "./DebitCards";
import { plans } from "./data";
import CheckIcon from "../../assets/icons/check-icon.svg";

export const PremiumPlans = () => {
  return (
    <section className={style["plans-section"]}>
      <h1>Pick your Premium</h1>
      <p className={style["title"]}>
        Listen without limits on your phone, speaker, and other devices.
      </p>
      <div className={style["card-icons"]}>
        <DebitCards />
      </div>
      <div className={style["premium-plans"]}>
        {plans.map((plan) => (
          <div className={style["plan-card"]}>
            {plan.title !== "Mini" && (
              <CustomButton
                children={"1 month free"}
                className={style["free-duration-btn"]}
              />
            )}
            <CustomButton
              children={"One-time plans available"}
              className={style["plans-btn"]}
            />
            <h5 className={style["plan-title"]}>{plan.title}</h5>
            <p>{plan.duration}</p>
            <p>{plan.account}</p>
            {/* {plan.title === "Mini" ? (
              <hr className={style["hr-mini"]} />
            ) : (
              <hr className={style["hr"]} />
            )} */}
            <div  className={plan.title === "Mini" ? style['plans-list-mini'] : style['plans-list']}>
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
              <CustomButton
                className={style["view-plans-btn"]}
                children={"VIEW PLANS"}
              />
            </div>
            <p className={style['terms']}>
            <a href="#/terms">
              Terms and conditions apply.
            </a>
            1 month free not available for users who have already tried Premium
            </p>
          </div>
        ))}
      </div>
      <div className={style["discount-section"]}>
        <h6 className={style["discount-title"]}>
          Special discount for eligible students in university
        </h6>
        <CustomButton
          className={style["learn-more-btn"]}
          children={"Learn more"}
        />
      </div>
    </section>
  );
};

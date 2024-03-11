import React from "react";
import "./LandingPageHeader.css";
import { HeaderMenu } from "./HeaderMenu";
import { Logo } from "../Logo/Logo";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

// function useState(initialValue) {
//     let val = initialValue;
//     function change(newValue) {
//         val = newValue
//     }
//     return[val, change]
// }

export const LandingPageHeader = () => {
    // change menu state
    const [showMenu, setMenu] = React.useState(false);

    // toggle menu
    const toggleMenu = () => {
      setMenu(!showMenu);
    };

  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <MenuIcon className="menu-icon" onClick={toggleMenu} />
      <div className="menu">
        <HeaderMenu className={showMenu ? 'mobile' : ''} />
      </div>
    </header>
  );
};

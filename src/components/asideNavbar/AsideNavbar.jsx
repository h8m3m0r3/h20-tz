import react from "react";

import "./AsideNavbar.scss";

import logo from "../../assets/images/H2O.svg";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import icon5 from "../../assets/images/icon5.svg";
import icon6 from "../../assets/images/icon6.svg";
import icon7 from "../../assets/images/icon7.svg";

const AsideNavbar = () => {
  return (
    <aside className="aside__navbar">
      <img
        src={logo}
        alt="Логотип"
        className="logo"
        style={{ width: "64px", paddingTop: "55px", paddingLeft: "43px" }}
      />
      <ul>
        <li className="aside__icon">
          <a href="#">
            <img src={icon1} alt="Календарь" />
          </a>
        </li>
        <li className="aside__icon">
          <a href="#">
            <img src={icon2} alt="Задачи" />
          </a>
        </li>
        <li className="aside__icon">
          <a href="#">
            <img src={icon3} alt="Архив" />
          </a>
        </li>
        <li className="aside__icon">
          <a href="#">
            <img src={icon4} alt="Партнеры" />
          </a>
        </li>
        <li className="aside__icon">
          <a href="#">
            <img src={icon5} alt="Бухгалтерия" />
          </a>
        </li>
        <li className="aside__icon active">
          <a href="#">
            <img src={icon6} alt="Графики" />
          </a>
        </li>
        <li className="aside__icon">
          <a href="#">
            <img src={icon7} alt="Настройки" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export { AsideNavbar };

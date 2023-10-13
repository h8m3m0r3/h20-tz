import React from "react";

import "./Header.scss";

import moveBut from "../../assets/images/disabledVector.svg";
// import moveBut from "../../assets/images/activeVector.svg";
import avatar from "../../assets/images/avatar.svg";
import modalBtn from "../../assets/images/modalBtn.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="move__buttons">
        <button className="moveButtonLeft">
          <img
            src={moveBut}
            alt="Кнопка для прокрутки влево"
            style={{ paddingLeft: "13px" }}
          />
        </button>
        <button className="moveButtonRight">
          <img
            src={moveBut}
            alt="Кнопка для прокрутки вправо"
            style={{ paddingLeft: "13px" }}
          />
        </button>
      </div>
      <ul className="header__reports">
        <li className="header__report">Свод данных по сотрудникам</li>
        <li className="header__report active">Сводный отчет внутри компании</li>
        <li className="header__report">Сводный отчет по сделкам</li>
        <hr />
        <hr className="hr active" />
      </ul>
      <section className="header__profile">
        <img src={avatar} alt="Фото профиля" />
        <div className="header__profileInfo">
          <p>Kristina 🐰</p>
          <span>Менеджер Продаж</span>
        </div>
        <button>
          <img src={modalBtn} alt="" />
        </button>
      </section>
    </header>
  );
};

export { Header };

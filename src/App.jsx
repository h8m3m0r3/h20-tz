import React, { useMemo, useState } from "react";
import "./App.scss";
import { AsideNavbar, Header } from "./components/index.js";

import { Chart } from "./Chart";
import {
  yearByMonthTotal,
  yearByMonthB2B,
  yearByMonthB2C,
  monthByWeekTotal,
  monthByWeekB2B,
  monthByWeekB2C,
  lastWeekByDayTotal,
  lastWeekByDayB2B,
  lastWeekByDayB2C,
} from "./datas";

import goodArrow from "./assets/images/goodArrow.svg";
import badArrow from "./assets/images/badArrow.svg";
import normalArrowUp from "./assets/images/normalArrowUp.svg";
import normalArrowDown from "./assets/images/normalArrowDown.svg";

const randomNum = () => {
  const res = (Math.random() * (100 - -100) + -100).toFixed(1);
  if (res < 0) {
    Math.abs(res);
  }
  return res;
};
function generateRandomData() {
  return Math.floor(Math.random() * 300000) + 1;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Total");
  const [selectedPeriod, setSelectedPeriod] = useState("Год");

  const dataByCategoryAndPeriod = {
    Total: {
      Неделя: lastWeekByDayTotal,
      Месяц: monthByWeekTotal,
      Год: yearByMonthTotal,
    },
    B2B: {
      Неделя: lastWeekByDayB2B,
      Месяц: monthByWeekB2B,
      Год: yearByMonthB2B,
    },
    B2C: {
      Неделя: lastWeekByDayB2C,
      Месяц: monthByWeekB2C,
      Год: yearByMonthB2C,
    },
  };
  const selectedData =
    dataByCategoryAndPeriod[selectedCategory][selectedPeriod];

  console.log(yearByMonthTotal, monthByWeekTotal, lastWeekByDayTotal);

  const handleChangePeriod = (period) => {
    setSelectedPeriod(period);
  };
  const handleChangeCaregory = (category) => {
    setSelectedCategory(category);
  };

  const randomTroubleValues = useMemo(() => {
    return Array.from({ length: 10 }, () => generateRandomData());
  }, []);
  const randomPercent = useMemo(() => {
    return Array.from({ length: 3 }, () => randomNum());
  }, []);

  const revenueFinal = selectedData.reduce((total, item) => {
    if (item.category === "Выручка") {
      total += item.value;
    }
    return total;
  }, 0);
  const expensesFinal = selectedData.reduce((total, item) => {
    if (item.category === "Затраты") {
      total += item.value;
    }
    return total;
  }, 0);
  const incomeFinal = selectedData.reduce((total, item) => {
    if (item.category === "Прибыль") {
      total += item.value;
    }
    return total;
  }, 0);
  const debtFinal = selectedData.reduce((total, item) => {
    if (item.category === "Задолженность") {
      total += item.value;
    }
    return total;
  }, 0);
  const totalFinal = selectedData.reduce((total, item) => {
    if (item.category === "Итог") {
      total += item.value;
    }
    return total;
  }, 0);
  const totalTotal = yearByMonthTotal.reduce((total, item) => {
    if (item.category === "Итог") {
      total += item.value;
    }
    return total;
  }, 0);
  const totalB2B = yearByMonthB2B.reduce((total, item) => {
    if (item.category === "Итог") {
      total += item.value;
    }
    return total;
  }, 0);
  const totalB2C = yearByMonthB2C.reduce((total, item) => {
    if (item.category === "Итог") {
      total += item.value;
    }
    return total;
  }, 0);

  console.log("render");
  return (
    <div className="layout">
      <AsideNavbar />
      <Header />
      <main className="statistic">
        <header>
          <h1>Сводный отчет</h1>
        </header>
        <section className="statistic__content">
          <figure>
            <div className="statistic__cards">
              <div
                className={`statistic__card ${
                  selectedCategory === "Total" ? "active" : ""
                }`}
                onClick={() => handleChangeCaregory("Total")}
              >
                <div
                  className={`card__percent ${
                    randomPercent[0] <= 0 ? "bad" : "good"
                  }`}
                >
                  {randomPercent[0] <= 0 ? (
                    <img
                      src={
                        selectedCategory === "Total"
                          ? normalArrowDown
                          : badArrow
                      }
                      alt="Стрелочка вниз"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  ) : (
                    <img
                      src={
                        selectedCategory === "Total" ? normalArrowUp : goodArrow
                      }
                      alt="Стрелочка вверх"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  )}
                  <p>{`${randomPercent[0]} %`}</p>
                </div>
                <div className="card__info">
                  <div className="card__value">{`₽ ${totalTotal}`}</div>
                  <div className="card__type">Итоги</div>
                </div>
              </div>
              <div
                className={`statistic__card ${
                  selectedCategory === "B2B" ? "active" : ""
                }`}
                onClick={() => handleChangeCaregory("B2B")}
              >
                <div
                  className={`card__percent ${
                    randomPercent[1] <= 0 ? "bad" : "good"
                  }`}
                >
                  {randomPercent[1] <= 0 ? (
                    <img
                      src={
                        selectedCategory === "B2B" ? normalArrowDown : badArrow
                      }
                      alt="Стрелочка вниз"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  ) : (
                    <img
                      src={
                        selectedCategory === "B2B" ? normalArrowUp : goodArrow
                      }
                      alt="Стрелочка вверх"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  )}
                  <p>{`${randomPercent[1]} %`}</p>
                </div>
                <div className="card__info">
                  <div>
                    <p className="card__value">{`₽ ${totalB2B}`}</p>
                  </div>
                  <div className="card__type">B2B</div>
                </div>
              </div>
              <div
                className={`statistic__card ${
                  selectedCategory === "B2C" ? "active" : ""
                }`}
                onClick={() => handleChangeCaregory("B2C")}
              >
                <div
                  className={`card__percent ${
                    randomPercent[2] <= 0 ? "bad" : "good"
                  }`}
                >
                  {randomPercent[2] <= 0 ? (
                    <img
                      src={
                        selectedCategory === "B2C" ? normalArrowDown : badArrow
                      }
                      alt="Стрелочка вниз"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  ) : (
                    <img
                      src={
                        selectedCategory === "B2C" ? normalArrowUp : goodArrow
                      }
                      alt="Стрелочка вверх"
                      style={{ width: "16px", marginRight: "5px" }}
                    />
                  )}
                  <p>{`${randomPercent[2]} %`}</p>
                </div>
                <div className="card__info">
                  <div>
                    <p className="card__value">{`₽ ${totalB2C}`}</p>
                  </div>
                  <div className="card__type">B2C</div>
                </div>
              </div>
            </div>
            <div className="statistic__chartblock">
              <header className="statistic__chartheader">
                <p>Общая статистика</p>
                <div className="statistic__chartfilter">
                  <p
                    className={`chartfilter ${
                      selectedPeriod === "Неделя" ? "active" : ""
                    }`}
                    onClick={() => handleChangePeriod("Неделя")}
                  >
                    Неделя
                  </p>
                  <p
                    className={`chartfilter ${
                      selectedPeriod === "Месяц" ? "active" : ""
                    }`}
                    onClick={() => handleChangePeriod("Месяц")}
                  >
                    Месяц
                  </p>
                  <p
                    className={`chartfilter ${
                      selectedPeriod === "Год" ? "active" : ""
                    }`}
                    onClick={() => handleChangePeriod("Год")}
                  >
                    Год
                  </p>
                  <hr />
                  <hr
                    className="hr active"
                    style={
                      selectedPeriod === "Неделя"
                        ? { marginLeft: "0px", width: "67px" }
                        : selectedPeriod === "Месяц"
                        ? { marginLeft: "96px", width: "59px" }
                        : { marginLeft: "180px", width: "35px" }
                    }
                  />
                </div>
              </header>
              <div className="statistic__chart">
                <Chart data={selectedData} />
              </div>
              <div className="statistic__items">
                <div className="statistic__item">
                  <div
                    className="item__circle"
                    style={{ background: "#73CF7A" }}
                  ></div>
                  <div>
                    <p className="item__type">Выручка</p>
                    <p className="item__value">{`₽ ${revenueFinal}`}</p>
                  </div>
                </div>
                <div className="statistic__item">
                  <div
                    className="item__circle"
                    style={{ background: "#30C7DC" }}
                  ></div>
                  <div>
                    <p className="item__type">Затраты</p>
                    <p className="item__value">{`₽ ${expensesFinal}`}</p>
                  </div>
                </div>
                <div className="statistic__item">
                  <div
                    className="item__circle"
                    style={{ background: "#45AAF2" }}
                  ></div>
                  <div>
                    <p className="item__type">Прибыль</p>
                    <p className="item__value">{`₽ ${incomeFinal}`}</p>
                  </div>
                </div>
                <div className="statistic__item">
                  <div
                    className="item__circle"
                    style={{ background: "#F5E230" }}
                  ></div>
                  <div>
                    <p className="item__type">Задолженность</p>
                    <p className="item__value">{`₽ ${debtFinal}`}</p>
                  </div>
                </div>
                <div className="statistic__item">
                  <div
                    className="item__circle"
                    style={{ background: "#AC74FC" }}
                  ></div>
                  <div>
                    <p className="item__type">Итог</p>
                    <p className="item__value">{`₽ ${totalFinal}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <aside className="statistic__aside">
            <header className="aside__header">
              <p>Проблемные зоны</p>
            </header>
            <ul className="aside__troubles">
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[0] <= 10000 ? "greenCircle" : randomTroubleValues[0] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">Линейный персонал</p>
                  <p className="aside__trouble info__value">
                    {`₽ ${randomTroubleValues[0]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[1] <= 10000 ? "greenCircle" : randomTroubleValues[1] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Подразделение разовых работ ФОТ
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[1]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[2] <= 10000 ? "greenCircle" : randomTroubleValues[2] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">Бензин (наличные)</p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[2]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[3] <= 10000 ? "greenCircle" : randomTroubleValues[3] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">Закупка инвентаря</p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[3]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[4] <= 10000 ? "greenCircle" : randomTroubleValues[4] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Закупка спецодежды/СИЗ
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[4]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[5] <= 10000 ? "greenCircle" : randomTroubleValues[5] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Ремонт оборудования
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[5]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[6] <= 10000 ? "greenCircle" : randomTroubleValues[6] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Обслуживание автомобиля
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[6]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[7] <= 10000 ? "greenCircle" : randomTroubleValues[7] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">Форс-мажоры</p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[7]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[8] <= 10000 ? "greenCircle" : randomTroubleValues[8] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Рекламные бюджеты (Блогеры)
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[8]}`}
                  </p>
                </div>
              </li>
              <li className="aside__trouble">
                <div className={`aside__trouble ${randomTroubleValues[9] <= 10000 ? "greenCircle" : randomTroubleValues[9] <= 50000 ? "yellowCircle" : "redCircle"}`} />
                <div className="aside__trouble info">
                  <p className="aside__trouble info__text">
                    Рекламные бюджеты (Контекст)
                  </p>
                  <p className="aside__trouble info__value">
                  {`₽ ${randomTroubleValues[9]}`}
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;

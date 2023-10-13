import React from "react";

const useCountingValue = (selectedData) => {
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

  return {revenueFinal, expensesFinal, incomeFinal, debtFinal, totalFinal};
};

export default useCountingValue;

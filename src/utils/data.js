function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomRevenueExpenses() {
  return {
    b2b: generateRandomNumber(0, 10000),
    b2c: generateRandomNumber(0, 10000),
  };
}

function generateDataArrayForYear() {
  const today = new Date();
  const startDate = new Date("2023-01-01");
  const dataArray = [];
  let currentDebt = { b2b: 0, b2c: 0 };

  for (
    let date = new Date(startDate);
    date <= today;
    date.setDate(date.getDate() + 1)
  ) {
    const id = `ID-${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    const revenue = generateRandomRevenueExpenses();
    const expenses = generateRandomRevenueExpenses();
    const formattedDate = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`;
    const income = {
      b2b: revenue.b2b - expenses.b2b,
      b2c: revenue.b2c - expenses.b2c,
    };

    dataArray.push({
      id,
      date: formattedDate,
      revenue,
      expenses,
      income,
      debt: { ...currentDebt },
    });
  }

  return dataArray;
}
const yearByDay = generateDataArrayForYear();
// =================== За год по месяцам ===================
// total
function calculateMonthlyRevenueAndExpenses(dataArray) {
  const monthlyData = {};

  dataArray.forEach((item) => {
    const [day, dataMonth, dataYear] = item.date.split(".");
    const monthKey = `${dataYear}-${dataMonth}`;

    if (!monthlyData[monthKey]) {
      const options = { month: "short" };
      const monthName = new Intl.DateTimeFormat("ru-RU", options).format(
        new Date(dataYear, dataMonth - 1, 1)
      );
      const formattedMonth =
        monthName.charAt(0).toUpperCase() + monthName.slice(1, 3);

      monthlyData[monthKey] = {
        month: formattedMonth,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const monthData = monthlyData[monthKey];
    const { revenue, expenses } = item;

    monthData.revenue += revenue.b2b + revenue.b2c;
    monthData.expenses += expenses.b2b + expenses.b2c;

    monthData.income = monthData.revenue - monthData.expenses;
    monthData.debt = 0;

    monthData.total = 0;
  });

  let totalIncome = 0;
  for (const monthKey in monthlyData) {
    const monthData = monthlyData[monthKey];
    totalIncome += monthData.income;
    monthData.total = totalIncome;
  }

  const result = [];

  for (const monthKey in monthlyData) {
    const monthData = monthlyData[monthKey];

    result.push({
      gap: monthData.month,
      category: "Выручка",
      value: monthData.revenue,
    });

    result.push({
      gap: monthData.month,
      category: "Затраты",
      value: monthData.expenses,
    });

    result.push({
      gap: monthData.month,
      category: "Прибыль",
      value: monthData.income,
    });

    result.push({
      gap: monthData.month,
      category: "Задолженность",
      value: monthData.debt,
    });

    result.push({
      gap: monthData.month,
      category: "Итог",
      value: monthData.total,
    });
  }

  return result;
}
const yearByMonthTotal = calculateMonthlyRevenueAndExpenses(yearByDay);
export { yearByMonthTotal };

// B2B
function calculateMonthlyRevenueAndExpensesB2B(dataArray) {
  const monthlyDataB2B = {};
  let totalIncomeB2B = 0;

  dataArray.forEach((item) => {
    const [day, dataMonth, dataYear] = item.date.split(".");
    const monthKey = `${dataYear}-${dataMonth}`;

    if (!monthlyDataB2B[monthKey]) {
      const options = { month: "short" };
      const monthName = new Intl.DateTimeFormat("ru-RU", options).format(
        new Date(dataYear, dataMonth - 1, 1)
      );
      const formattedMonth =
        monthName.charAt(0).toUpperCase() + monthName.slice(1, 3);

      monthlyDataB2B[monthKey] = {
        month: formattedMonth,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const monthData = monthlyDataB2B[monthKey];
    const { revenue, expenses } = item;

    monthData.revenue += revenue.b2b;
    monthData.expenses += expenses.b2b;

    monthData.income = monthData.revenue - monthData.expenses;
    monthData.debt = 0;
    monthData.total = 0;
  });

  for (const monthKey in monthlyDataB2B) {
    const monthData = monthlyDataB2B[monthKey];
    totalIncomeB2B += monthData.income;
    monthData.total = totalIncomeB2B;
  }

  const result = [];

  for (const monthKey in monthlyDataB2B) {
    const monthData = monthlyDataB2B[monthKey];

    result.push({
      gap: monthData.month,
      category: "Выручка",
      value: monthData.revenue,
    });

    result.push({
      gap: monthData.month,
      category: "Затраты",
      value: monthData.expenses,
    });

    result.push({
      gap: monthData.month,
      category: "Прибыль",
      value: monthData.income,
    });

    result.push({
      gap: monthData.month,
      category: "Задолженность",
      value: 0,
    });

    result.push({
      gap: monthData.month,
      category: "Итог",
      value: monthData.total,
    });
  }

  return result;
}
const yearByMonthB2B = calculateMonthlyRevenueAndExpensesB2B(yearByDay);
export { yearByMonthB2B };

// B2C
function calculateMonthlyRevenueAndExpensesB2C(dataArray) {
  const monthlyDataB2C = {};
  let totalIncomeB2C = 0;

  dataArray.forEach((item) => {
    const [day, dataMonth, dataYear] = item.date.split(".");
    const monthKey = `${dataYear}-${dataMonth}`;

    if (!monthlyDataB2C[monthKey]) {
      const options = { month: "short" };
      const monthName = new Intl.DateTimeFormat("ru-RU", options).format(
        new Date(dataYear, dataMonth - 1, 1)
      );
      const formattedMonth =
        monthName.charAt(0).toUpperCase() + monthName.slice(1, 3);

      monthlyDataB2C[monthKey] = {
        month: formattedMonth,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const monthData = monthlyDataB2C[monthKey];
    const { revenue, expenses } = item;

    monthData.revenue += revenue.b2c;
    monthData.expenses += expenses.b2c;

    monthData.income = monthData.revenue - monthData.expenses;
    monthData.debt = 0;
    monthData.total = 0;
  });

  for (const monthKey in monthlyDataB2C) {
    const monthData = monthlyDataB2C[monthKey];
    totalIncomeB2C += monthData.income;
    monthData.total = totalIncomeB2C;
  }

  const result = [];

  for (const monthKey in monthlyDataB2C) {
    const monthData = monthlyDataB2C[monthKey];

    result.push({
      gap: monthData.month,
      category: "Выручка",
      value: monthData.revenue,
    });

    result.push({
      gap: monthData.month,
      category: "Затраты",
      value: monthData.expenses,
    });

    result.push({
      gap: monthData.month,
      category: "Прибыль",
      value: monthData.income,
    });

    result.push({
      gap: monthData.month,
      category: "Задолженность",
      value: 0,
    });

    result.push({
      gap: monthData.month,
      category: "Итог",
      value: monthData.total,
    });
  }

  return result;
}
const yearByMonthB2C = calculateMonthlyRevenueAndExpensesB2C(yearByDay);
export { yearByMonthB2C };

// =================== По неделям за последний месяц ===================
// total
function calculateWeeklyRevenueAndExpenses(dataArray) {
  if (dataArray.length < 28) {
    return [];
  }
  const last28Data = dataArray.slice(-28);
  const weeklyData = {};

  last28Data.forEach((item, index) => {
    const weekNumber = Math.floor(index / 7) + 1;

    if (!weeklyData[weekNumber]) {
      weeklyData[weekNumber] = {
        week: `Неделя ${weekNumber}`,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const weekData = weeklyData[weekNumber];
    const { revenue, expenses } = item;

    weekData.revenue += revenue.b2b + revenue.b2c;
    weekData.expenses += expenses.b2b + expenses.b2c;

    weekData.income = weekData.revenue - weekData.expenses;
    weekData.debt = 0;
    weekData.total = 0;
  });

  let totalIncome = 0;
  for (const weekNumber in weeklyData) {
    const weekData = weeklyData[weekNumber];
    totalIncome += weekData.income;
    weekData.total = totalIncome;
  }

  const result = [];

  for (const weekNumber in weeklyData) {
    const weekData = weeklyData[weekNumber];

    result.push({
      gap: weekData.week,
      category: "Выручка",
      value: weekData.revenue,
    });

    result.push({
      gap: weekData.week,
      category: "Затраты",
      value: weekData.expenses,
    });

    result.push({
      gap: weekData.week,
      category: "Прибыль",
      value: weekData.income,
    });

    result.push({
      gap: weekData.week,
      category: "Задолженность",
      value: weekData.debt,
    });

    result.push({
      gap: weekData.week,
      category: "Итог",
      value: weekData.total,
    });
  }

  return result;
}
const monthByWeekTotal = calculateWeeklyRevenueAndExpenses(yearByDay);
export { monthByWeekTotal };

// B2B
function calculateWeeklyB2BRevenueAndExpenses(dataArray) {
  if (dataArray.length < 28) {
    return [];
  }

  const last28Data = dataArray.slice(-28);

  const weeklyB2BData = {};

  last28Data.forEach((item, index) => {
    const weekNumber = Math.floor(index / 7) + 1;

    if (!weeklyB2BData[weekNumber]) {
      weeklyB2BData[weekNumber] = {
        week: `Неделя ${weekNumber}`,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const weekB2BData = weeklyB2BData[weekNumber];
    const { revenue, expenses } = item;

    weekB2BData.revenue += revenue.b2b;
    weekB2BData.expenses += expenses.b2b;

    weekB2BData.income = weekB2BData.revenue - weekB2BData.expenses;
    weekB2BData.debt = 0;
    weekB2BData.total = 0;
  });

  let totalB2BIncome = 0;
  for (const weekNumber in weeklyB2BData) {
    const weekB2BData = weeklyB2BData[weekNumber];
    totalB2BIncome += weekB2BData.income;
    weekB2BData.total = totalB2BIncome;
  }

  const result = [];

  for (const weekNumber in weeklyB2BData) {
    const weekB2BData = weeklyB2BData[weekNumber];

    result.push({
      gap: weekB2BData.week,
      category: "Выручка",
      value: weekB2BData.revenue,
    });

    result.push({
      gap: weekB2BData.week,
      category: "Затраты",
      value: weekB2BData.expenses,
    });

    result.push({
      gap: weekB2BData.week,
      category: "Прибыль",
      value: weekB2BData.income,
    });

    result.push({
      gap: weekB2BData.week,
      category: "Задолженность",
      value: weekB2BData.debt,
    });

    result.push({
      gap: weekB2BData.week,
      category: "Итог",
      value: weekB2BData.total,
    });
  }

  return result;
}
const monthByWeekB2B = calculateWeeklyB2BRevenueAndExpenses(yearByDay);
export { monthByWeekB2B };

// B2C
function calculateWeeklyB2CRevenueAndExpenses(dataArray) {
  if (dataArray.length < 28) {
    return [];
  }
  const last28Data = dataArray.slice(-28);

  const weeklyB2CData = {};

  last28Data.forEach((item, index) => {
    const weekNumber = Math.floor(index / 7) + 1;

    if (!weeklyB2CData[weekNumber]) {
      weeklyB2CData[weekNumber] = {
        week: `Неделя ${weekNumber}`,
        revenue: 0,
        expenses: 0,
        income: 0,
        debt: 0,
        total: 0,
      };
    }

    const weekB2CData = weeklyB2CData[weekNumber];
    const { revenue, expenses } = item;

    weekB2CData.revenue += revenue.b2c;
    weekB2CData.expenses += expenses.b2c;

    weekB2CData.income = weekB2CData.revenue - weekB2CData.expenses;
    weekB2CData.debt = 0;
    weekB2CData.total = 0;
  });

  let totalB2CIncome = 0;
  for (const weekNumber in weeklyB2CData) {
    const weekB2CData = weeklyB2CData[weekNumber];
    totalB2CIncome += weekB2CData.income;
    weekB2CData.total = totalB2CIncome;
  }

  const result = [];

  for (const weekNumber in weeklyB2CData) {
    const weekB2CData = weeklyB2CData[weekNumber];

    result.push({
      gap: weekB2CData.week,
      category: "Выручка",
      value: weekB2CData.revenue,
    });

    result.push({
      gap: weekB2CData.week,
      category: "Затраты",
      value: weekB2CData.expenses,
    });

    result.push({
      gap: weekB2CData.week,
      category: "Прибыль",
      value: weekB2CData.income,
    });

    result.push({
      gap: weekB2CData.week,
      category: "Задолженность",
      value: weekB2CData.debt,
    });

    result.push({
      gap: weekB2CData.week,
      category: "Итог",
      value: weekB2CData.total,
    });
  }

  return result;
}
const monthByWeekB2C = calculateWeeklyB2CRevenueAndExpenses(yearByDay);
export { monthByWeekB2C };
// =================== По дням за последнюю неделю ===================
// total
function calculateLastWeekRevenueAndExpenses(dataArray) {
  if (dataArray.length < 7) {
    return [];
  }

  const last7Data = dataArray.slice(-7);

  const result = [];

  let totalIncome = 0;

  last7Data.forEach((item) => {
    const { date, revenue, expenses } = item;

    const income = (revenue.b2b + revenue.b2c) - (expenses.b2b + expenses.b2c);

    result.push({
      gap: date,
      category: "Выручка",
      value: revenue.b2b + revenue.b2c,
    });

    result.push({
      gap: date,
      category: "Затраты",
      value: expenses.b2b + expenses.b2c,
    });

    result.push({
      gap: date,
      category: "Прибыль",
      value: income,
    });

    result.push({
      gap: date,
      category: "Задолженность",
      value: 0,
    });

    totalIncome += income;

    result.push({
      gap: date,
      category: "Итог",
      value: totalIncome,
    });
  });

  return result;
}
const lastWeekByDayTotal = calculateLastWeekRevenueAndExpenses(yearByDay)
export { lastWeekByDayTotal }

// B2B
function calculateLastWeekB2BRevenueAndExpenses(dataArray) {
  if (dataArray.length < 7) {
    return [];
  }

  const last7Data = dataArray.slice(-7);

  const result = [];

  let totalB2BIncome = 0;

  last7Data.forEach((item) => {
    const { date, revenue, expenses } = item;

    const b2bIncome = revenue.b2b - expenses.b2b;

    result.push({
      gap: date,
      category: "Выручка",
      value: revenue.b2b,
    });

    result.push({
      gap: date,
      category: "Затраты",
      value: expenses.b2b,
    });

    result.push({
      gap: date,
      category: "Прибыль",
      value: b2bIncome,
    });

    result.push({
      gap: date,
      category: "Задолженность",
      value: 0,
    });

    totalB2BIncome += b2bIncome;

    result.push({
      gap: date,
      category: "Итог",
      value: totalB2BIncome,
    });
  });

  return result;
}
const lastWeekByDayB2B = calculateLastWeekB2BRevenueAndExpenses(yearByDay)
export { lastWeekByDayB2B }

// B2C
function calculateLastWeekB2CRevenueAndExpenses(dataArray) {
  if (dataArray.length < 7) {
    return [];
  }

  const last7Data = dataArray.slice(-7);

  const result = [];

  let totalB2CIncome = 0;

  last7Data.forEach((item) => {
    const { date, revenue, expenses } = item;

    const b2cIncome = revenue.b2c - expenses.b2c;

    result.push({
      gap: date,
      category: "Выручка",
      value: revenue.b2c,
    });

    result.push({
      gap: date,
      category: "Затраты",
      value: expenses.b2c,
    });

    result.push({
      gap: date,
      category: "Прибыль",
      value: b2cIncome,
    });

    result.push({
      gap: date,
      category: "Задолженность",
      value: 0,
    });

    totalB2CIncome += b2cIncome;

    result.push({
      gap: date,
      category: "Итог",
      value: totalB2CIncome,
    });
  });

  return result;
}
const lastWeekByDayB2C = calculateLastWeekB2CRevenueAndExpenses(yearByDay)
export { lastWeekByDayB2C }

export function convertDateToString(date) {
  const monthNum = date.getMonth() + 1;
  const monthNumStr = monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
  const dayNumStr =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  return `${date.getFullYear()}-${monthNumStr}-${dayNumStr}`;
}

export function getCurrentDateTime() {
  const todayDateTime = new Date();
  const todayDateStr = convertDateToString(todayDateTime);

  return { todayDateTime, todayDateStr };
}

export function subtractMonths(date, months) {
  let newMonth = date.getMonth() - months;
  if (newMonth < 0) {
    newMonth += 12;
    date.setFullYear(date.getFullYear() - 1);
  }

  date.setMonth(newMonth);
  return date;
}


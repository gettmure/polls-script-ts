const getWeekTimestamp = (): number => {
  const todayDate: Date = new Date();
  todayDate.setDate(todayDate.getDate() - 7);
  return todayDate.getTime();
};

export { getWeekTimestamp };

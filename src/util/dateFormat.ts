const numCheck = (num: number) => num < 10 ? `0${num}` : num;
export const getDate = (date: Date) => `${numCheck(date.getFullYear())}.${numCheck(date.getMonth() + 1)}.${numCheck(date.getDate())}`;
export const getDateAndTime = (date: Date) =>
    `${date.getFullYear()}.${numCheck(date.getMonth() + 1)}.${numCheck(date.getDate())} ${numCheck(date.getHours())}:${numCheck(date.getMinutes())}`;


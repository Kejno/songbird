export const randomNum = (max) => {
  let rand = Math.random() * (max + 1);
  return Math.floor(rand);
}
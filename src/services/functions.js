const randomNum = (max) => {
  let rand = Math.random() * (max);
  return Math.floor(rand);
}

const playAudio = (path) => {
  const audioElement = new Audio(path);
  audioElement.play();
};

const pauseAudio = (path) => {
  const audioElement = new Audio(path);
  audioElement.pause();
};

export {
  randomNum,
  playAudio,
  pauseAudio
}
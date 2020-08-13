import birdsData from './birdsData';

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

const randomRightId = (count = 0) => {
  const allItemInQuiz = birdsData[count].data.length - 1;
  const randomIndex = randomNum(allItemInQuiz);
  const rightId = birdsData[count].data[randomIndex].id;
  return rightId
}

export {
  randomNum,
  randomRightId,
  playAudio,
  pauseAudio
}
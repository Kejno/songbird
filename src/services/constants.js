import soundError from '../assets/audio/error.mp3';
import soundSuccess from '../assets/audio/success.mp3';
import birdData from './birdsData';

const defaultNameToQuestion = "******";
const status = {
  success: 'success',
  error: 'error',
  active: 'active',
}
const multiplier = 5;
const allScore = multiplier * birdData.length;

export {
  defaultNameToQuestion,
  status,
  multiplier,
  soundError,
  soundSuccess,
  allScore
}
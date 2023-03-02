const formatTimer = (secs) => {
  let minute = Math.floor(secs / 60);
  let seconds = secs % 60;
  minute = minute.toString().length === 1 ? "0" + minute : minute;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
  return minute + ":" + seconds;
};

export default formatTimer;

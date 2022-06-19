
import { useEffect, useState } from "react";
import { getTimeRaw } from "../../utils/date-time";

const useCountDown = (targetTime) => {
  const [countDown, setCountDown] = useState(targetTime.diff(getTimeRaw()));

  useEffect(() => {
    const interval = setInterval(() => {
      const diffTime = targetTime.diff(getTimeRaw())
      const count = getReturnValues(diffTime).reduce((total, num) => total + num);
      if (count <= 0) {
        clearInterval(interval)
      }
      setCountDown(diffTime)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  // const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  // const hours = Math.floor(
  //   (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  // );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export default useCountDown;

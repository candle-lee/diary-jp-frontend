import { useCallback, useEffect, useState } from "react";
import { CountUpTime } from "../../../constant/interfaces";

type CountUpTimeKey = keyof CountUpTime;

const RecordingCounter = ({ isStopped }: { isStopped: boolean }) => {
  const [countUpTime, setCountUpTime] = useState<CountUpTime>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const incrementTime = useCallback(() => {
    setCountUpTime((prevTime) => {
      if (!isStopped) {
        const totalSeconds =
          parseInt(prevTime.hours) * 3600 +
          parseInt(prevTime.minutes) * 60 +
          parseInt(prevTime.seconds) +
          1;

        const hours = Math.floor(totalSeconds / 3600)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((totalSeconds % 3600) / 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor(totalSeconds % 60)
          .toString()
          .padStart(2, "0");

        return { hours, minutes, seconds };
      }

      return prevTime; // If stopped, return the same time
    });
  }, [isStopped]);

  useEffect(() => {
    const interval = setInterval(() => {
      incrementTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementTime]);

  const timeUnits: CountUpTimeKey[] = ["hours", "minutes", "seconds"];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
      <div
        className={`flex justify-center gap-[0.12rem] ${
          !isStopped ? "bg-red-600" : "bg-[#000]"
        } rounded-2xl py-[0.12rem] px-[0.5rem]`}
      >
        {timeUnits.map((unit, index, arr) => (
          <span
            key={unit}
            className="text-[#FFF] text-ms font-normal leading-[125%] tracking-[-0.0175rem]"
          >
            {countUpTime[unit]}
            {index < arr.length - 1 ? ":" : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecordingCounter;

"use client";
import { useCo2Table } from "@/hooks/use-co2-table";

const APNEA = 60; // seconds
const BREATHING_SETS = [160, 135, 120, 105, 90, 75, 60];

export default function CO2Table() {
  const {
    mode: timerMode,
    seconds,
    totalTime,
    start,
  } = useCo2Table(APNEA, BREATHING_SETS);

  return (
    <main className="flex min-h-screen bg-blue-200 flex-col items-center justify-center p-24">
      <p className="text-3xl">{timerMode}</p>
      {timerMode === "idle" && (
        <p className="absolute top-0">
          Total time of exercise: {totalTime.minutes} minutes{" "}
          {totalTime.seconds} seconds
        </p>
      )}
      {timerMode === "idle" && (
        <button
          onClick={start}
          className="bg-blue-800 text-white px-6 py-4 rounded-full text-4xl"
        >
          START
        </button>
      )}
      {timerMode !== "idle" && (
        <p className="text-[200px] font-bold">{seconds}</p>
      )}
    </main>
  );
}

/* if (seconds === 0) {
        if (mode === "breathe") {
          setMode("apnea");
          setSeconds(APNEA);
        } else {
          if (currentSet === TOTAL_SETS - 1) {
            setMode("idle");
          } else {
            const newSet = currentSet + 1;
            setMode("breathe");
            setCurrentSet(newSet);
            setSeconds(BREATHING_SETS[newSet]);
          }
        }
      } */

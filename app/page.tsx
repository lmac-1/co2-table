"use client";
import { Button } from "@/components/Button";
import { useCo2Table } from "@/hooks/use-co2-table";

const APNEA = 45; // seconds
const BREATHING_SETS = [160, 135, 120, 105, 90, 75, 60];

export default function CO2Table() {
  const {
    mode: timerMode,
    seconds,
    totalTime,
    start,
    currentSet,
  } = useCo2Table(APNEA, BREATHING_SETS);

  return (
    <main className="flex min-h-screen bg-blue-200 flex-col items-center justify-center p-24">
      <p className="absolute top-0 text-xs">
        Total time of exercise: {totalTime.minutes} minutes {totalTime.seconds}{" "}
        seconds
      </p>

      {timerMode === "idle" && <Button onClick={start} />}
      {["breathe", "apnea"].includes(timerMode) && (
        <div className="max-w-sm w-full">
          <div className="flex justify-between items-center">
            <p className="text-3xl">
              {timerMode === "breathe" ? "breathe deeply" : "hold your breath"}
            </p>
            <p>
              set {currentSet + 1} of {BREATHING_SETS.length}{" "}
            </p>
          </div>
          <p className="text-[100px] text-center w-full sm:text-[200px] font-bold">
            {seconds}
          </p>
        </div>
      )}
      {timerMode === "finished" && <p>Congratulations, you have finished</p>}
    </main>
  );
}

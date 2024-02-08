import calculateTotalTime from "@/lib/calculateTotalTime";
import { useCallback, useEffect, useMemo, useState } from "react";

const useCo2Table = (apnea: number, breathingSets: number[]) => {
  const [mode, setMode] = useState("idle"); // idle | breathe | apnea
  const [currentSet, setCurrentSet] = useState(0);
  const [seconds, setSeconds] = useState(breathingSets[currentSet]);
  const TOTAL_SETS = breathingSets.length;

  const totalTime = useMemo(() => {
    return calculateTotalTime({
      apnea,
      breathingSets,
    });
  }, [apnea, breathingSets]);

  const handleModeChange = useCallback(() => {
    if (mode === "breathe") {
      setMode("apnea");
      setSeconds(apnea);
    } else {
      const nextSet = currentSet + 1;
      if (nextSet < TOTAL_SETS) {
        setCurrentSet(nextSet);
        setMode("breathe");
        setSeconds(breathingSets[nextSet]);
      } else {
        setMode("idle");
      }
    }
  }, [currentSet, mode, TOTAL_SETS, apnea, breathingSets]);

  useEffect(() => {
    if (mode !== "idle") {
      const interval = setInterval(
        () =>
          setSeconds((prevSeconds) => {
            if (prevSeconds === 1) {
              handleModeChange();
            }
            return prevSeconds - 1;
          }),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [handleModeChange, mode]);

  const start = () => {
    setMode("breathe");
  };

  return { mode, seconds, totalTime, start };
};

export { useCo2Table };

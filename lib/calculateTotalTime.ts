const calculateTotalTime = ({
  apnea,
  breathingSets,
}: {
  apnea: number;
  breathingSets: number[];
}) => {
  const totalSets = breathingSets.length;
  const totalSeconds =
    apnea * totalSets +
    breathingSets.reduce((ac, current) => {
      return ac + current;
    }, 0);
  return { minutes: Math.floor(totalSeconds / 60), seconds: totalSeconds % 60 };
};

export default calculateTotalTime;

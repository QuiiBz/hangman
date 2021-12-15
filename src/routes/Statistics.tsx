import { FC, useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import { ScoreData } from '../lib/types';

const Statistics: FC = () => {
  const [stats, setStats] = useState<ScoreData[]>([]);

  useEffect(() => {
    const getStats = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/score`);
      const json = await response.json();
      const data = json.data as ScoreData[];

      setStats(data);
    };

    getStats();
  }, []);

  return (
    <div className="flex flex-col jsustify-center w-max md:w-96 gap-y-4 mx-auto">
      {stats.map(stat => (
        <StatCard key={stat.position} stat={stat} />
      ))}
    </div>
  );
};

export default Statistics;

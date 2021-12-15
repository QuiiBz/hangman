import { FC, useEffect, useState } from 'react';
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
    <>
      {stats.map(stat => (
        <p key={stat.position}>
          #{stat.position}: {stat.username}, {stat.score}
        </p>
      ))}
    </>
  );
};

export default Statistics;

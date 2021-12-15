import { FC } from 'react';
import { ScoreData } from '../lib/types';

type Props = {
  stat: ScoreData;
};

const StatCard: FC<Props> = ({ stat: { position, username, score, avatar } }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg dark:bg-gray-900">
      <p className="text-lg font-bold text-gray-800 dark:text-gray-50">#{position}</p>
      <div className="flex items-center gap-x-4">
        <img className="w-6 h-6" src={avatar} alt={`Avatar of ${username}`} />
        <p className="text-gray-800 dark:text-gray-50">{username}</p>
      </div>
      <p className="text-gray-800 dark:text-gray-50">{score} points</p>
    </div>
  );
};

export default StatCard;

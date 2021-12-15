import { FC } from 'react';
import Game from '../components/Game';
import GameProvider from '../lib/GameContext';

const Play: FC = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default Play;

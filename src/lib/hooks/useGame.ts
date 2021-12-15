import { useContext } from 'react';
import { Game, GameContext } from '../GameContext';

const useGame = (): Game => {
  const game = useContext(GameContext);

  if (!game) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return game;
};

export default useGame;

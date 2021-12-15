import { createContext, FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { GameStatus, WordData } from './types';

export type Game = {
  username?: string;
  setUsername: (username: string) => void;
  wordData?: WordData;
  setWordData: (word: WordData) => void;
  trys: number;
  tryLetter: (letter: string) => void;
  letters: string[];
  status: GameStatus;
  startGame: () => void;
};

export const GameContext = createContext<Game | null>(null);

const GameProvider: FC = ({ children }) => {
  const [username, setUsername] = useState<string>(() => localStorage.getItem('username') || '');
  const [wordData, setWordData] = useState<WordData>();
  const [trys, setTrys] = useState(0);
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState(GameStatus.WAITING);

  const startGame = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/word`);
    const json = await response.json();
    const data = json.data as WordData;

    // eslint-disable-next-line no-console
    console.log(`Word is: ${data.word}`);

    setWordData(data);
    setTrys(10);
    setLetters([]);
    setStatus(GameStatus.PLAYING);
  };

  const endGame = async (gameStatus: GameStatus.LOST | GameStatus.WON) => {
    setStatus(gameStatus);
    toast.success(gameStatus === GameStatus.WON ? 'You won!' : 'You lost!');

    await fetch(`${import.meta.env.VITE_API_URL}/game`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isWin: gameStatus === GameStatus.WON,
        username,
        word: wordData!.word,
        id: wordData!.id,
      }),
    });
  };

  useEffect(() => {
    if (!wordData) {
      startGame();
    }

    localStorage.setItem('username', username);
  }, [username]);

  useEffect(() => {
    if (wordData && Array.from(wordData!.word).every(wordLetter => letters.includes(wordLetter))) {
      endGame(GameStatus.WON);
    }
  }, [letters]);

  const tryLetter = (letter: string): void => {
    if (letters.includes(letter)) {
      toast.error(`You already tried the letter: ${letter}`);
    } else if (wordData?.word.includes(letter)) {
      setLetters([...letters, letter]);
    } else {
      setTrys(trys - 1);
      setLetters([...letters, letter]);

      if (trys === 1) {
        endGame(GameStatus.LOST);
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        username,
        setUsername,
        wordData,
        setWordData,
        trys,
        tryLetter,
        letters,
        status,
        startGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

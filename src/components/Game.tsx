import { ChangeEvent, FC } from 'react';
import useGame from '../lib/hooks/useGame';
import { GameStatus } from '../lib/types';
import LogIn from './LogIn';

const Game: FC = () => {
  const { status, username, trys, tryLetter, letters, wordData, startGame } = useGame();

  if (!username) {
    return <LogIn />;
  }

  const guessLetter = (event: ChangeEvent<HTMLInputElement>) => {
    const letter = event.target.value;
    tryLetter(letter);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-16">
      <h1 className="text-2xl mb-8 text-center dark:text-white">You have {trys} guesses left</h1>
      {[GameStatus.WON, GameStatus.LOST].includes(status) ? (
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-gray-800 dark:text-gray-50">The word was: {wordData!.word}</p>
          <button
            type="button"
            onClick={startGame}
            className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded"
          >
            Play again!
          </button>
        </div>
      ) : null}
      {status === GameStatus.PLAYING ? (
        <>
          <div className="flex gap-2">
            {Array.from(wordData?.word || []).map((wordLetter, index) => {
              const isLetterFound = letters.includes(wordLetter);

              return (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`text-2xl ${
                    isLetterFound ? 'text-gray-800 dark:text-gray-50' : 'text-gray-400 dark:text-gray-600'
                  }`}
                >
                  {isLetterFound ? wordLetter : '_'}{' '}
                </span>
              );
            })}
          </div>
          <input
            type="text"
            placeholder="a"
            value=""
            onChange={guessLetter}
            className="text-2xl p-4 border-2 border-gray-200 rounded-lg w-12 dark:bg-gray-900 dark:border-gray-700"
          />
        </>
      ) : null}
    </div>
  );
};

export default Game;

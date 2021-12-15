import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  const play = () => navigate('/play');

  return (
    <div className="flex flex-col items-center m-x-auto">
      <h1 className="text-2xl mb-8 text-center">Welcome to Hangman!</h1>
      <button type="button" onClick={play} className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded">
        Play now
      </button>
    </div>
  );
};

export default Home;

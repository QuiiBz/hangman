import { FC, useState } from 'react';
import Modal from 'react-modal';
import useGame from '../lib/hooks/useGame';
import { ScoreData } from '../lib/types';

const LogIn: FC = () => {
  const { setUsername } = useGame();
  const [value, setValue] = useState('');
  const [modal, setModal] = useState(false);

  const logIn = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${value}`);
    const json = await response.json();
    const data = json.data as ScoreData;

    if (data) {
      setModal(true);
    } else {
      setUsername(value);
    }
  };

  return (
    <div className="mx-auto w-1/2 flex items-center flex-col">
      <h1 className="text-2xl mb-8 text-center">Please enter a username</h1>
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="px-2 py-1 bg-gray-50 border-gray-200 border-2 rounded text-gray-700 font-normal focus:outline-none focus:border-gray-500"
        />
        <button type="button" onClick={logIn} className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded">
          Log In
        </button>
      </div>
      <Modal
        isOpen={modal}
        className="bg-gray-50 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg"
      >
        <h1 className="text-lg mb-8">This username already exists, do you still want to log in?</h1>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setModal(false)}
            className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded"
          >
            No
          </button>
          <button
            type="button"
            onClick={() => setUsername(value)}
            className="px-4 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded"
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogIn;

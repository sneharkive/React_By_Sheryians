import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }




  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername('');
  }

  return (
    <>
      <div className="card">
        <div className='mb-20'>
          <h1 className="text-4xl mb-10 font-bold">Number is {count}</h1>

          <button
            className="bg-blue-500 px-5  font-bold text-3xl pt-1 pb-3 rounded-lg"
            onClick={increment}>
            +
          </button>

          <button
            className="bg-blue-500 px-5  font-bold text-3xl pt-1 pb-3 ml-10 rounded-lg"
            onClick={decrement}>
            -
          </button>
        </div>



        <form onSubmit={(e) => submitHandler(e)}>
          <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
            className="bg-zinc-800 p-4 m-4 rounded-lg outline-none min-w-80 text-2xl font-semibold"
            type="text"
            placeholder="Enter your name..."
          />
          <button className="bg-blue-500 px-5  font-bold text-3xl pt-1 pb-3 ml-10 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

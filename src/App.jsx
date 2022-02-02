import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChangeMinutes = ({ target: { value } }) => {
    const MAX_VALUE = 59;
    const MIN_VALUE = 0;
    const newValue = Number(value) || MIN_VALUE;
    if (newValue <= MAX_VALUE && newValue >= MIN_VALUE) { setMinutes(newValue); }
  };

  const handleChangeSeconds = ({ target: { value } }) => {
    const MAX_VALUE = 59;
    const MIN_VALUE = 0;
    const newValue = Number(value) || MIN_VALUE;
    if (newValue <= MAX_VALUE && newValue >= MIN_VALUE) { setSeconds(newValue); }
  };

  const handleInitializeTimer = () => {
    const ONE_SECOND = 1000;
    const newTimer = setInterval(
      () => setSeconds((counter) => counter - 1),
      ONE_SECOND,
    );
    setTimer(newTimer);
  };

  const handlePauseTimer = () => {
    clearInterval(timer);
  };

  const handleClearTimer = () => {
    handlePauseTimer();
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    if (seconds < 0) {
      if (minutes - 1 >= 0) {
        setSeconds(59);
        setMinutes((counter) => counter - 1);
      } else {
        handleClearTimer();
      }
    }
  }, [seconds]);

  return (
    <div className="mx-auto  flex flex-col items-center ">
      <header className="h-10 bg-sky-600 flex-1 w-full text-center">
        <h1 className="p-6 text-3xl">Wolf's Timer</h1>
      </header>
      <main className="items-center">
        <form className="flex flex-row px-4 w-full mt-2">
          <input
            type="number"
            onChange={handleChangeMinutes}
            value={minutes}
            minLength={0}
            maxLength={59}
            className="mt-2 flex-1 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <input
            type="number"
            onChange={handleChangeSeconds}
            value={seconds}
            minLength={0}
            maxLength={59}
            className="mt-2 flex-1 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
        </form>
        <h3 className="mt-10 text-3xl flex-1 text-center">
          {minutes}
          :
          {seconds}
        </h3>
        <div className="mt-10 flex items-center px-4 ">
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              onClick={handleInitializeTimer}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              INICIAR
            </button>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              onClick={handlePauseTimer}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              PAUSAR
            </button>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              onClick={handleClearTimer}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ZERAR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

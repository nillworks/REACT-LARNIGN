const Child = ({ counts, setCount, onDecrement, onReset }) => {
  return (
    <div className="text-center py-40 flex gap-4 items-center flex-col">
      <h1>
        <span>Count: </span>
        {counts}
      </h1>

      <div className="flex gap-4">
        <button
          className="p-3 bg-pink-400 rounded-lg font-bold text-white"
          onClick={setCount}
        >
          Increment
        </button>

        <button
          className="p-3 bg-red-400 rounded-lg font-bold text-white"
          onClick={onDecrement}
        >
          Decrement
        </button>
      </div>

      <button
        className="p-3 bg-violet-400 rounded-lg font-bold text-white"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Child;

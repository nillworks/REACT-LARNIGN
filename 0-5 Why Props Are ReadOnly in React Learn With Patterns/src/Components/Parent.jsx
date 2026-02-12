import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <Child
        counts={count}
        setCount={incrementCount}
        onDecrement={Decrement}
        onReset={reset}
      />
    </div>
  );
};

export default Parent;

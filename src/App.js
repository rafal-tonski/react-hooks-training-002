import React, { useCallback, useState } from "react";

import Counter from "./Counter";
import Triangle from "./Triangle";

import "./App.css";

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const [isVisible, setIsVisible] = useState(true);

  const toggleTriangleElement = () => setIsVisible((prevValue) => !prevValue);

  const triangleElement = isVisible ? <Triangle /> : null;

  

  const increaseFirstCounter = useCallback(
    () => setFirstCounter((prevValue) => prevValue + 1),
    []
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter((prevValue) => prevValue + 1),
    []
  );

  // const firstCounterComponent = useMemo(
  //   () => <Counter counter={firstCounter} index={1} />,
  //   [firstCounter]
  // );

  return (
    <div>
      <p>Licznik numer 1 wynosi: {firstCounter}</p>
      <p>Licznik numer 2 wynosi: {secondCounter}</p>
      <br />
      <br />
      {/* {firstCounterComponent} */}
      <Counter index={1} callback={increaseFirstCounter} />

      <Counter index={2} callback={increaseSecondCounter} />
      <br />
      <br />
      <br />
      <hr />
      <button onClick={toggleTriangleElement}>Toggle</button>

      {triangleElement}
    </div>
  );
};

export default App;

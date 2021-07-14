import React from "react";

const Counter = ({ index, callback }) => {
  console.log(`Render licznika nr ${index}`);

  return (
    <div>
      <button onClick={callback}>Zwiększ licznik {index}</button>
    </div>
  );
};

export default React.memo(Counter);

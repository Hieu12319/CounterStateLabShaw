import { useState } from "react";
import SmallCounter from "./SmallCounter";

export default function Counter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const handleClick = (newState, idx) => {
    const newCounts = [...counts];
    newCounts[idx] = newState;
    setCounts(newCounts);
  };

  return (
    <>
      <h1>All the Counts</h1>
      {counts.map((count, idx) => (
        <SmallCounter
          key={idx}
          handleClick={handleClick}
          count={count}
          idx={idx}
        />
      ))}
    </>
  );
}

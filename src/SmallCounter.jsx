export default function SmallCounter({ handleClick, count, idx }) {
  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={() => handleClick(count + 1, idx)}>+</button>
        <button onClick={() => handleClick(count - 1, idx)}>-</button>
      </section>
    </>
  );
}

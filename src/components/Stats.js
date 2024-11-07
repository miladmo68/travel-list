export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your paking list</em>
      </p>
    );

  const numIems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const perecentage = Math.round((numPacked / numIems) * 100);

  return (
    <footer className="stats">
      <em>
        {perecentage === 100
          ? "you got everything! Ready to go"
          : `💼 You have ${numIems} items on your list, and yoy already packed
        ${numPacked} (${perecentage}%)`}
      </em>
    </footer>
  );
}

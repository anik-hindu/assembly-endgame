function Keyboard() {
  const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return (
    <section className="keyboard">
      {alphabets.split("").map((letter) => (
        <button key={letter} className="keyboard-key">
          {letter}
        </button>
      ))}
    </section>
  );
}

export default Keyboard;

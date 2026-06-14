function Keyboard({ handleClick, letters, word, gameStatus }) {
  const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const keyElements = alphabets.split("").map((letter) => {
    const isGuessed = letters.includes(letter);
    const isCorrect = isGuessed & word.includes(letter);

    let keysClass = "keyboard-key";
    if (isCorrect) {
      keysClass += " correct-key";
    }
    if (isGuessed && !isCorrect) {
      keysClass += " wrong-key";
    }

    return (
      <button
        key={letter}
        className={keysClass}
        onClick={() => handleClick(letter)}
        disabled={gameStatus}
      >
        {letter}
      </button>
    );
  });

  return (
    <section className={gameStatus ? "keyboard keyboard-disabled" : "keyboard"}>
      {keyElements}
    </section>
  );
}

export default Keyboard;

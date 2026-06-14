function Keyboard({ handleClick, letters, word }) {
  const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const keyElements = alphabets.split("").map((letter) => {
    const isGuessed = letters.includes(letter);
    const isCorrect = isGuessed & word.includes(letter);

    let keysClass = "keyboard-key";
    if (isCorrect) {
      keysClass = "keyboard-key correct-key";
    }
    if (isGuessed && !isCorrect) {
      keysClass = "keyboard-key wrong-key";
    }
    return (
      <button
        key={letter}
        className={keysClass}
        onClick={() => handleClick(letter)}
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard">{keyElements}</section>;
}

export default Keyboard;

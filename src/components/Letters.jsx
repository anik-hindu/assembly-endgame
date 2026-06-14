function Letters({ word, letters, isGameLost }) {
  return (
    <section className="letters">
      {word.split("").map((char, index) => {
        const className =
          isGameLost && !letters.includes(char)
            ? "letter-text letter-missed"
            : "letter-text";
        return (
          <p key={index} className={className}>
            {letters.includes(char) ? char : isGameLost ? char : null}
          </p>
        );
      })}
    </section>
  );
}
export default Letters;

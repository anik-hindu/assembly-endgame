function Letters({ word, letters }) {
  return (
    <section className="letters">
      {word.split("").map((char, index) => {
        return (
          <p key={index} className="letter-text">
            {letters.includes(char) && char}
          </p>
        );
      })}
    </section>
  );
}
export default Letters;

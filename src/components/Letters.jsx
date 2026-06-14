function Letters({ word }) {
  return (
    <section className="letters">
      {word.split("").map((char, index) => (
        <p key={index} className="letter-text">
          {/* {char} */}
        </p>
      ))}
    </section>
  );
}
export default Letters;

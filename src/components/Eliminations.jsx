import { languages } from "../data/languages";

function Eliminations({ count }) {
  return (
    <section className="eliminations">
      {languages.map((language, index) => {
        const styles = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };

        let className =
          count > index ? "language-text language-eliminated" : "language-text";

        return (
          <p key={index} className={className} style={styles}>
            {language.name}
          </p>
        );
      })}
    </section>
  );
}

export default Eliminations;

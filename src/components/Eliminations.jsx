import { languages } from "../languages";

function Eliminations() {
  return (
    <section className="eliminations">
      {languages.map((language, index) => {
        const styles = {
          backgroundColor: language.backgroundColor,
          color: language.color,
        };
        return (
          <p key={index} className="language-text" style={styles}>
            {language.name}
          </p>
        );
      })}
    </section>
  );
}

export default Eliminations;

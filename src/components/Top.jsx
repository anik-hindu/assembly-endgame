import { languages } from "../data/languages";
import { getFarewellText } from "../utils";

function Top({ count }) {
  const noticeMessage =
    count > 0
      ? getFarewellText(languages[count - 1].name)
      : "Yay lots of choice, the world is safe";

  const messageElement = <p className="notice-text">“{noticeMessage}”</p>;
  return (
    <header className="top">
      <section className="headline">
        <h1 className="headline-title">Assembly: Endgame</h1>
        <p className="headline-desc">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className={count > 0 ? "notice notice-farewell" : "notice"}>
        {messageElement}
      </section>
    </header>
  );
}

export default Top;

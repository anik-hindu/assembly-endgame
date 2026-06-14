import Eliminations from "./components/Eliminations";
import Keyboard from "./components/Keyboard";
import Letters from "./components/Letters";
import Top from "./components/Top";

function App() {
  return (
    <main className="main">
      <Top />
      <Eliminations />
      <Letters word="refactor" />
      <Keyboard />
    </main>
  );
}

export default App;

import "./App.css";

const letters = "ABCDEFGHIJKLMNOPQRST".split("");

const App = () => (
  <div className="buttons">
    {letters.map((letter) => (
      <div key={letter} className="button">
        {letter}
      </div>
    ))}
  </div>
);

export default App;

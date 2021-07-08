import PurpleRose from "./PurpleRose.webp";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={PurpleRose} className="PurpleRose img-fluid" alt="PurpleRose" />
        </header>
        <main>
          <Dictionary />


        </main>
        <footer className="App-footer">
          <small>Coded by Tabea Schuchardt</small>
        </footer>
      </div>
    </div>
  );
}

export default App;

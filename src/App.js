import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="TodaysForecast">
      <Search />
      </div>
      <footer>
        <p>This app has {" "}
          <a href="https://github.com/ViktoriaAve/react-weather-app" target="_blank" rel="noreferrer">open-source code</a>
          , coded by Viktoria Averjanova
        </p>
        </footer>
    </div>
  );
}

export default App;

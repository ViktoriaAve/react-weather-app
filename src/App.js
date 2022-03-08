import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <footer><h1>Weather search app</h1></footer>
      <div className="TodaysForecast">
      <Search />
      </div>
      <footer><a href="https://github.com/ViktoriaAve/react-weather-app" target="_blank" rel="noreferrer">Open-source code</a></footer>
    </div>
  );
}

export default App;

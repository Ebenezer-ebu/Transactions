import "./App.css";
import Main from "./components/Main";
import Filter from "./components/Filter";
import Search from "./components/Search";
import MainContext from "./components/Context";

function App() {
  return (
    <MainContext>
      <div className="App">
        <Search />
        <Filter />
        <hr />
        <Main />
      </div>
    </MainContext>
  );
}

export default App;

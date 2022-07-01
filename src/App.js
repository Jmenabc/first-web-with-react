import AppBar from "./components/AppBar";
import StartText from "./components/StartText";
import Cards from "./components/Cards";
import imageWithText from "./components/imageWithText"
function App() {
  return (
    <div className="App">
      <AppBar />
      <StartText/>
      <Cards/>
      <imageWithText/>
    </div>
  );
}

export default App;

import "./styles/App.css";
import { Home } from "./pages";

function App() {
  document.title = "MLS Property Website";
  return (
    <main>
      <div>
        <Home />
      </div>
    </main>
  );
}

export default App;

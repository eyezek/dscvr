import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Intro from "./Intro";
import Discovery from "./Discovery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/app" element={<Discovery />} />
          {/* <Main /> */}
          {/* <Discovery /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Main from "./components/Main"
import Drinks from "./components/Drinks"

function App() {


  return (
    <div className="App">
      <Router>
        <Link to="/drinks">Drinks!</Link>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drinks" element={ <Drinks/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

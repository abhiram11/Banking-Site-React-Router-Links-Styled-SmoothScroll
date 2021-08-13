import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

//00:17:45 media query
//00:20:00 using BOTH react SCROLL and REACT ROUTER for navigation
//00:26:00 IMPLEMENTING ROUTER on App.js for the first time...
//00:31:00 TRANSFORM TRANSLATE usage!
// 00:35:30 Link on NAV when CLICKED => &.active {} in its style

function App() {
  return (
    <Router>
      {/* Hi */}
      <Navbar />
    </Router>
  );
}

export default App;

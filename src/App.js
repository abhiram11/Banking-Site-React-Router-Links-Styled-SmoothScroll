import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Home from "./pages";

//00:17:45 media query
//00:20:00 using BOTH react SCROLL and REACT ROUTER for navigation
//00:26:00 IMPLEMENTING ROUTER on App.js for the first time...
//00:31:00 TRANSFORM TRANSLATE usage!
// 00:35:30 Link on NAV when CLICKED => &.active {} in its style
// 00:49:00 using styled.aside`` for the first time...
// 01:04:00 styling of sidebar, display grid massive customizations!!!
// 01:07:00 introduction to PAGES!
// 01:09:30 using useStates for the MenuIcon ,isOpen

function App() {
  return (
    <Router>
      {/* Hi */}
      {/* <Sidebar />
      <Navbar /> */}

      <Home />
    </Router>
  );
}

export default App;

import "./App.css";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Home from "./pages";
import SigninPage from "./pages/signin";

//00:17:45 media query
//00:20:00 using BOTH react SCROLL and REACT ROUTER for navigation
//00:26:00 IMPLEMENTING ROUTER on App.js for the first time...
//00:31:00 TRANSFORM TRANSLATE usage!
// 00:35:30 Link on NAV when CLICKED => &.active {} in its style
// 00:49:00 using styled.aside`` for the first time...
// 01:04:00 styling of sidebar, display grid massive customizations!!!
// 01:07:00 introduction to PAGES!
// 01:09:30 using useStates for the MenuIcon ,isOpen
// 1:16:30 How to write video component : <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
// 01:20:00 video part continued again... styled.video``
// 01:26:00 NEW TYPE KA one-liner in jsx !!
// 1:39:30 using :before on front page, content : "" is important

// 1:50:00 see effects of:
// grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};
// `;

//2:04:30 using Data.js to make the components (InfoSections) reusable!
//2:08:40 using     img: require('../../images/svg-1.svg') in styled components to get imgs from given path
//2:17:00 revise
// 2:23:00 col1 col2 explanation for infocontainer
// 2:38:30 3 columns using   grid-template-columns: 1fr 1fr 1fr; in ServicesElements.js
//2:48:00 starting with signin page AND react router!!!!!!!
//2:57:00 working on FOOTER

function App() {
  return (
    <Router>
      {/* if we want Navbar everywhere just put it above this switch case and remove it from / or {Home} */}

      {/* Hi */}
      {/* <Sidebar />
      <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

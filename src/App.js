import { useCycle } from "framer-motion";
// import { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import MenuWrapper from "./components/menuwrapper/MenuWrapper";
import Nav from "./components/Nav/Nav";
import Routers from "./routing/Routers";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  const [showWrapper,setShowWrapper] = useCycle(false, true);
  console.log(showWrapper)
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Nav showWrapper={showWrapper} setShowWrapper={setShowWrapper}/>
        <MenuWrapper showWrapper={showWrapper}/>
        <Routers/>
      </Router>
    </div>
  );
}

export default App;

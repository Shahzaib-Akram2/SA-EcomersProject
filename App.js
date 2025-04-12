import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Component/Login";
import Signup from "./Component/Signup";
import MainPage from "./Component/Mainpage";
import Shoes from "./Component/Shoes";
import MyComponent from "./Component/MyComponent";
import ClickShoes from "./Component/ClickShoes";
import MoroShoes from "./Component/MoroShoes";
import ClickPants from "./Component/Clickpants";
import ClickShirts from "./Component/Clickshirts";
import ClickTeshirt from "./Component/ClickTeshirt";
import ClickJacket from "./Component/ClickJacket";
import ClickSwiper from "./Component/ClickSwiper";
import Clickcap from "./Component/Clickcap";
import ClickGlasses from "./Component/ClickGlasses";
import ClickWatch from "./Component/ClickWatch";
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ClickShoes" element={<ClickShoes />} />
        <Route path="/Clickpants" element={<ClickPants/>}/>
        <Route path="/Clickshirts" element={<ClickShirts/>}/>
        <Route path="/ClickTeshirt" element={<ClickTeshirt/>}/>
        <Route path="/ClickJacket" element={<ClickJacket/>}/>
        <Route path="/ClickSwiper" element={<ClickSwiper/>}/>
        <Route path="/Clickcap" element={<Clickcap/>}/>
        <Route path="/ClickGlasses" element={<ClickGlasses/>}/>
        <Route path="/ClickWatch" element={<ClickWatch/>}/>
        
        <Route path="/MoroShoes" element={<MoroShoes />} />
      </Routes>
    </Router>
    
    
    
  );
  
}

export default App;

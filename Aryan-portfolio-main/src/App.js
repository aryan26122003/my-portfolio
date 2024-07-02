import { BrowserRouter, Route,Routes } from "react-router-dom";
import "./App.css";
// import About from './Component/About/About';
// import Analysis from './Component/Analysis/Analysis';
// import Banner from './Component/Banner/Banner';
// import Customerreview from './Component/Customerreview/Customerreview';
// import Footer from './Component/Footer/Footer';
// import Nav from './Component/Nav/Nav';
// import Research from './Component/Research/Research';
// import Service from './Component/Service/Service';
// import Work from './Component/Work/Work';
// import Workstogether from './Component/Worktogether/Workstogether';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Servive from "./Pages/Servive";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Index from "./Component/Admin/Index";
import Skills from "./Pages/Skills";
import Problems from "./Pages/Problems";
// import Admin from "./"
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/Servive' element={<Servive/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path="/problemsloving" element={<Problems/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          {/* <Route path='/admin' element={<Contact/>}/> */}
          <Route path='/Admin' element={<Index/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

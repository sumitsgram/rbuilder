import Header from './HomePage/Header';
import ResumeTemplate from "./HomePage/ResumeTemplate";
import MyResume from "./HomePage/MyResume";
import AboutUs from "./HomePage/AboutUs";
import Dummy from "./HomePage/Dummy";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  
  return (
   <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<ResumeTemplate/>} />
    <Route path="/myresume" element={<MyResume/>} />
    <Route path="/aboutus" element={<AboutUs/>} />  
    <Route path="*" element={<Dummy/>} /> 
   </Routes>
   </Router>
  );
}
export default App;









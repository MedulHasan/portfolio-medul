import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";
import Navigation from "./pages/Shared/Navigation/Navigation";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/works' element={<Works />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;

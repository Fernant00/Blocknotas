import BlocForm from "./Components/BlockForm";
import BlocList from "./Components/BlockList";
import "./Navbar.css";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App(){
    return (
        <Router>
        <nav className="navbar">
            
        <div className="container">
            <Link to="/" className="navbar__link">Home</Link>
                <Link to="/BlocForm" className="navbar__link">Create Note</Link>
                
           
        </div>
        </nav>
        <main>
            <Routes>
                <Route path="/" element={<BlocList />} />
                <Route path="/BlocForm" element={<BlocForm />} />
            </Routes>
        </main>
    </Router>
);
}
export default App;
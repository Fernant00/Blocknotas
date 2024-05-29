import BlocForm from "./Components/BlocForm";
import BlocList from "./Components/BlocList";

function App(){
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/BlocForm">About</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/BlocForm" element={<BlocForm />} />
                </Routes>
            </main>
        </Router>
    );
};
export default App;
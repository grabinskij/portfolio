import "./styles/style.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
          <div className="App">
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
              </Routes>
              <Footer />
            </Router>
          </div>
  )
}

export default App;

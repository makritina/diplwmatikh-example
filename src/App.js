import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <header>
          <h1>Αποθετήριο Βιβλίων</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <footer>
          <p>&copy; 2023 Αποθετήριο Βιβλίων</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

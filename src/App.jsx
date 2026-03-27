import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";

// CSS
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Country Detail Page (PART 3) */}
        <Route path="/country/:code" element={<CountryPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
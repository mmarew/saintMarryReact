import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./Stories";
import Paintings from "./Paintings";
import Manuscript from "./Manuscript";
import ResearchTools from "./ResearchTools";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
              </>
            }
          />{" "}
          <Route
            path="/Home"
            element={
              <>
                <Nav />
                <Home />
              </>
            }
          />
          <Route
            path="/Stories"
            element={
              <>
                <Nav />
                <Stories />
              </>
            }
          />{" "}
          <Route
            path="/Paintings"
            element={
              <>
                <Nav />
                <Paintings />
              </>
            }
          />{" "}
          <Route
            path="/Manuscript"
            element={
              <>
                <Nav />
                <Manuscript />
              </>
            }
          />{" "}
          <Route
            path="/Research"
            element={
              <>
                <Nav />
                <ResearchTools />
              </>
            }
          />{" "}
          <Route
            path="/About"
            element={
              <>
                <Nav />
                <About />
              </>
            }
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

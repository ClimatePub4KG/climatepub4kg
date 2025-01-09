import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./Home";
// import Publications from "./Publications";
import Contact from "./Contact"; 
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Header Section */}
        <header className="header">
          <img src="/climatepub4kg/images/logo.png" className="logo" alt="Logo" />
          <div className="nav-container">
            <ul className="nav-links">
              <li><Link to="/climatepub4kg/">Home</Link></li>
              {/* <li><Link to="/climatepub4kg/publications">Publications</Link></li> */}
              <li><Link to="/climatepub4kg/contact">Contact</Link></li>
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>
          <h1>ClimatePub4KG</h1>
          <p>Knowledge Graph to Support Evaluation and Development of Climate Models</p>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/climatepub4kg" element={<Home />} />
          <Route path="/climatepub4kg/contact" element={<Contact />} />
          {/* <Route path="/climatepub4kg/publications" element={<Publications />} /> */}
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <p>ClimatePub4KG</p>
          <p>
            This project is supported by the NSF under the grant{' '}
            <a href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.nsf.gov%2Fawardsearch%2FshowAward%3FAWD_ID%3D2333789%26HistoricalAwards%3Dfalse&data=05%7C02%7Ccaleb.hageman%40temple.edu%7Ca440add2049c4257e94f08dd26bb629e%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638709308437444392%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=2mAxObLe4uZvMxd0MNsUD4x54NqSXIinPt6a%2Bd%2FoBRQ%3D&reserved=0" target="_blank" rel="noopener noreferrer">
              ITE-2333789
            </a>{' '}
            in the Proto-OKN program.
          </p>
        </footer>

      </div>
    </Router>
  );
};

export default App;

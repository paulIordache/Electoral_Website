import React from 'react';
import { Route, Routes } from "react-router-dom"; // Import Routes and Route for routing
import Home from './Pages/Home'; // Import the Home component
import Candidates from './Pages/Candidates'; // Import the Candidates component
import './Style/app.css';
import NavBar from "./components/NavBar"; // Import the NavBar component
import Header from "./components/Header"; // Import the Header component
import "./components/Header.css"
import "./components/NavBar.css"
import CandidateDetails from "./Pages/CandidateDetails";
import VoteResultsChart from "./Pages/VoteResultsChart";


function App() {
    return (
        <div className="app-container">
            <Header />
            <NavBar />

            {/* Navbar below the header */}
            {/*<div className="navbar-container">*/}
            {/*    <NavBar />*/}
            {/*</div>*/}

            {/* Routes configuration */}
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/candidates" element={<Candidates />} /> {/* Candidates route */}
                    <Route path="/candidates/:id" element={<CandidateDetails />} />
                    <Route path="/vote-results" element={<VoteResultsChart />} /> {/* New Vote Results route */}
                </Routes>
            </div>
        </div>
    );
}

export default App;

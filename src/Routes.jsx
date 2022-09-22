import React from 'react';
import {
    BrowserRouter,
    Routes as Router,
    Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import List from './Components/List';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Router>
                <Route path="/" element={<List />} />
                <Route path="/appointments" element={<List showAppointments />} />
            </Router>
        </BrowserRouter>
    )
}

export default Routes;

import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import necessary components from react-router-dom
import CompanySelection from './components/CompanySelection/CompanySelection'; 
import LicenseValidation from './components/LicenseValidation/LicenseValidation'; 
import CompanyLogin from './components/CompanyLogin/CompanyLogin'; 
const App = () => { // Define the main App component
  return (
      <Router> {/* Wrap the application in a Router to enable routing */}
          <div> {/* Main container div */}
              <Routes> {/* Define the routing logic */}
                  <Route path="/company-selection" element={<CompanySelection />} /> {/* Define route for CompanySelection */}
                  <Route path="/license-validation" element={<LicenseValidation />} /> {/* Define route for LicenseValidation */}
                  <Route path="/company-login" element={<CompanyLogin />} /> {/* Define route for CompanyLogin */}
                  <Route path="/" element={<Navigate to="company-login" />} /> {/* Default route redirects to /company-selection */}
              </Routes>
          </div>
      </Router>
  );
}

export default App; // Export the App component as default



// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserFeedbackPage from "./UserFeedbackPage";
import AdminPage from "./AdminPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the User Feedback page */}
        <Route path="/" element={<UserFeedbackPage />} />
        
        {/* Define the route for the Admin page */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;

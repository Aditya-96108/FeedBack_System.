import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import Counter from './App'; // Import your Counter component

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your Counter component using the new createRoot API
root.render(<Counter />);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa"; 
import { Link } from "react-router-dom";


import {
  Wrapper,
  ToggleButton,
  FeedbackSection,
  FeedbackList,
  FeedbackCard,
  ActionButton,
  NavigationButton
} from './AdminPage.styles';

const AdminPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
    
    if (isDarkMode) {
      document.body.style.backgroundColor = '#181818'; 
    } else {
      document.body.style.backgroundColor = '#f8f8f8'; 
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDarkMode]);

  const fetchFeedbacks = async () => {
    const response = await axios.get("http://localhost:8080/api/feedbacks");
    const sortedFeedbacks = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setFeedbacks(sortedFeedbacks);
  };

  const handleApprove = async (id) => {
    await axios.put(`http://localhost:8080/api/feedbacks/${id}/approve`);
    fetchFeedbacks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/feedbacks/${id}`);
    fetchFeedbacks();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <ToggleButton onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </ToggleButton>

      <h1>Admin Feedback Dashboard</h1>
      <FeedbackSection isDarkMode={isDarkMode}>
        <h2>All Feedbacks:</h2>
        <FeedbackList>
          {feedbacks.map((fb) => (
            <FeedbackCard key={fb.id} isDarkMode={isDarkMode}>
              <div className="rating">
                {[...Array(fb.rating)].map((_, index) => (
                  <FaStar key={index} className="star filled" />
                ))}
              </div>
              <p><strong>Comment:</strong> {fb.comment}</p>
              <p><strong>Status:</strong> {fb.approved ? "Approved" : "Pending"}</p>

              <div className="actions">
                {!fb.approved && (
                  <ActionButton onClick={() => handleApprove(fb.id)} isDarkMode={isDarkMode}>Approve</ActionButton>
                )}
                <ActionButton onClick={() => handleDelete(fb.id)} isDarkMode={isDarkMode}>Delete</ActionButton>
              </div>
            </FeedbackCard>
          ))}
        </FeedbackList>
      </FeedbackSection>

      <Link to="/">
        <NavigationButton isDarkMode={isDarkMode}>Go to User Feedback Page</NavigationButton>
      </Link>
    </Wrapper>
  );
};

export default AdminPage;

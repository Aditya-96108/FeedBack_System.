import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import earImage from './finalear.avif';

// Importing styled components
import {
  Wrapper,
  ToggleButton,
  ProductSection,
  ProductImageWrapper,
  ProductDetails,
  Rating,
  ReviewsSection,
  ReviewList,
  ReviewCard,
  FeedbackSection,
  SubmitButton,
  AdminButton
} from './UserFeedbackPage.styles';

const UserFeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [averageRating, setAverageRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    calculateAverageRating();
    fetchReviews();
    if (isDarkMode) {
      document.body.style.backgroundColor = '#181818';
    } else {
      document.body.style.backgroundColor = '#f8f8f8';
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isDarkMode]);

  const calculateAverageRating = async () => {
    const response = await axios.get("http://localhost:8080/api/feedbacks/average");
    setAverageRating(response.data);
  };

  const fetchReviews = async () => {
    const response = await axios.get("http://localhost:8080/api/feedbacks");
    setReviews(response.data);
    setReviews(response.data.reverse());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }

    await axios.post("http://localhost:8080/api/feedbacks", { rating, comment });
    setRating(0);
    setComment("");
    calculateAverageRating();
    fetchReviews();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <ToggleButton onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </ToggleButton>

      <ProductSection>
        <ProductImageWrapper>
          <img src={earImage} alt="Wireless Earbuds" />
        </ProductImageWrapper>
        <ProductDetails isDarkMode={isDarkMode}>
          <h2>Wireless Earbuds</h2>
          <p>High-quality sound with noise cancellation, designed for all-day comfort.</p>
          <h3>Price: $149.99</h3>
          <Rating>
            <h4>Customer Rating: {averageRating.toFixed(1)} / 5</h4>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${index + 1 <= (hover || rating) ? "filled" : ""}`}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
          </Rating>
        </ProductDetails>
      </ProductSection>

      <ReviewsSection isDarkMode={isDarkMode}>
        <h2>Customer Reviews</h2>
        <h3>Average Rating: {averageRating.toFixed(1)} / 5</h3>
        <ReviewList>
          {reviews.map((review, index) => (
            <ReviewCard key={index} isDarkMode={isDarkMode}>
              <div className="stars">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} className="star filled" />
                ))}
              </div>
              <p>{review.comment}</p>
            </ReviewCard>
          ))}
        </ReviewList>
      </ReviewsSection>

      <FeedbackSection isDarkMode={isDarkMode}>
        <h2>Leave a Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Write your feedback here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <SubmitButton type="submit">Submit Feedback</SubmitButton>
        </form>
        <div className="info-box">
          <h3>Need Help?</h3>
          <p>If you need assistance with your purchase, feel free to contact our support team.</p>
        </div>
      </FeedbackSection>

      <Link to="/admin">
        <AdminButton isDarkMode={isDarkMode}>Go to Admin Page</AdminButton>
      </Link>
    </Wrapper>
  );
};

export default UserFeedbackPage;

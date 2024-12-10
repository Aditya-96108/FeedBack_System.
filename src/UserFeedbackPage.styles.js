// UserFeedbackPage.styles.js
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => (props.isDarkMode ? '#181818' : '#f8f8f8')};
  color: ${(props) => (props.isDarkMode ? '#ffffff' : '#333')};
  overflow-x: hidden;
  transition: background-color 0.3s, color 0.3s;
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${(props) => (props.isDarkMode ? '#fff' : '#007aff')};
  color: ${(props) => (props.isDarkMode ? '#181818' : 'white')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 10;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#f8f8f8' : '#005bb5')};
    background: linear-gradient(90deg, #5856d6, #ff2d55);
  }
`;

export const ProductSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ProductImageWrapper = styled.div`
  width: 60%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  width: 55%;
  h2 {
    font-size: 2rem;
    color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
  }
  p {
    color: ${(props) => (props.isDarkMode ? '#ccc' : '#777')};
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${(props) => (props.isDarkMode ? '#2ecc71' : '#2ecc71')};
  }

  @media (max-width: 1024px) {
    text-align: center;
    width: 80%;
  }
`;

export const Rating = styled.div`
  margin-top: 1.5rem;

  .stars {
    display: flex;
    gap: 0.2rem;
    font-size: 1.5rem;
    .star {
      color: ${(props) => (props.isDarkMode ? '#ccc' : '#ccc')};
      cursor: pointer;
      transition: color 0.2s ease, transform 0.2s ease;
      &.filled {
        color: orange;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const ReviewsSection = styled.section`
  margin-top: 2rem;  /* Reduced gap between Product and Reviews */
  margin-bottom: 2rem; /* Increased gap between Reviews and Feedback */
  padding: 1rem;
  background-color: ${(props) => (props.isDarkMode ? '#222' : '#ffffff')};
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const ReviewList = styled.div`
  margin-top: 2rem;
`;

export const ReviewCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#f9f9f9')};
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#444' : '#e6e6e6')};
  }

  .stars {
    display: flex;
    gap: 0.2rem;
    font-size: 1.3rem;

    .star {
      color: orange;
    }
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => (props.isDarkMode ? '#ccc' : '#333')};
  }
`;

export const FeedbackSection = styled.section`
  background-color: ${(props) => (props.isDarkMode ? '#222' : '#ffffff')};
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea {
      width: 82%;
      height: 60px;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid ${(props) => (props.isDarkMode ? '#777' : '#ddd')};
      font-size: 1rem;
      color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
      background-color: ${(props) => (props.isDarkMode ? '#444' : '#fff')};
    }
  }
`;

export const SubmitButton = styled.button`
  width: 90%;  /* Matches width of textarea */
  background-color: ${(props) => (props.isDarkMode ? '#007aff' : '#007aff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : 'white')};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, #005bb5, #2398b0);
    transform: scale(1.05);
  }
`;

export const AdminButton = styled.button`
  background-color: #ff2d55;
  color: ${(props) => (props.isDarkMode ? '#fff' : 'white')};
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  display: block;
  margin: 2rem auto;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff4081;
    transform: scale(1.05);
  }
`;

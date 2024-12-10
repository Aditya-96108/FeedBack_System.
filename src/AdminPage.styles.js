
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem;
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => (props.isDarkMode ? '#181818' : '#f8f8f8')};
  color: ${(props) => (props.isDarkMode ? '#fff' : '#333')};
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.9rem;
  }
`;

export const FeedbackSection = styled.section`
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const FeedbackList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeedbackCard = styled.li`
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#f9f9f9')};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: background-color 0.3s ease;

  .rating {
    margin-bottom: 1rem;
    display: flex;
    gap: 0.2rem;

    .star {
      color: orange;
    }
  }

  p {
    color: ${(props) => (props.isDarkMode ? '#ccc' : '#333')};
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#444' : '#e6e6e6')};
  }

  .actions {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.isDarkMode ? '#007aff' : '#007aff')};
  color: ${(props) => (props.isDarkMode ? '#fff' : 'white')};
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
`;

export const NavigationButton = styled.button`
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.8rem;
  }
`;

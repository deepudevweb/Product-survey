import React, { useState } from 'react';
import './Survey.css';

const questions = [
  "1. How satisfied are you with our products?",
  "2. How fair are the prices compared to similar retailers? ",
  "3. How satisfied are you with the value for money of your purchase? ",
  "4. On a scale of 1-10 how would you recommend us to your friends and family? ",
  "5. What could we do to improve our service?"
];

const SurveyQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ratings, setRatings] = useState(Array(questions.length).fill(null));
  const [improvementText, setImprovementText] = useState('');
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  const handleRatingChange = (rating) => {
    const updatedRatings = [...ratings];
    updatedRatings[currentQuestion] = rating;
    setRatings(updatedRatings);
  };

  const handleImprovementTextChange = (event) => {
    setImprovementText(event.target.value);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(Math.min(currentQuestion + 1, questions.length - 1));
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion(Math.max(currentQuestion - 1, 0));
  };

  const handleSubmitSurvey = () => {
    console.log("Survey submitted!");
    setSurveySubmitted(true);
  };

  const renderRatingCircles = () => {
    const totalCircles = currentQuestion === 3 ? 10 : 5;
    return Array.from({ length: totalCircles }, (_, index) => index + 1).map((rating) => (
      <div
        key={rating}
        onClick={() => handleRatingChange(rating)}
        style={{
          display: 'inline-block',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: rating <= ratings[currentQuestion] ? 'blue' : 'gray',
          margin: '0 5px',
          textAlign: 'center',
          lineHeight: '30px',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        {rating}
      </div>
    ));
  };

  if (surveySubmitted) {
    return <div className='thankyou'>Thank you for completing the survey!</div>;
  }

  return (
    <div className="survey-conatiner">
    <div>
      <h1 >Customer Survey</h1>
      <div className="question-content">
      <div style={{textAlign: 'right', marginBottom: '10px'}}>
        {currentQuestion + 1}/{questions.length} question
      </div>
      
      <h2 style={{marginBottom: '20px'}}>{questions[currentQuestion]}</h2>
      {currentQuestion === 4 && (
        
        <div>
          <textarea className='text-area'
            value={improvementText}
            onChange={handleImprovementTextChange}
            style={{ width: '100%', height: '100px', marginBottom: '10px'}}
            placeholder="Enter your suggestions here"

          />
          <button className='next-btn' onClick={handleSubmitSurvey}>Submit</button>
        </div>
        
      )}
      {currentQuestion !== 4 && <div>{renderRatingCircles()}</div> }
      </div>
      <div className='button'>
        <button className='prev-btn' onClick={handlePrevQuestion} disabled={currentQuestion === 0}>Previous</button>
        {currentQuestion !== 4 && (
          <button className='next-btn' onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next</button>
        )}
      </div>
    </div>
    </div>
  );
};

export default SurveyQuestions;

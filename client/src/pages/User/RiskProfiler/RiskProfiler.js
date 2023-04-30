import React, { useState } from 'react';
import './RiskProfiler.css';
import Modal from 'react-modal'; // Import the CSS file

Modal.setAppElement('#root');

function RiskProfiler() {
  const [riskProfile, setRiskProfile] = useState({
    age: '',
    income: '',
    investmentExperience: '',
    riskTolerance: '',
  });
  const [questionIndex, setQuestionIndex] = useState(5); // Track the index of the current question
  const [questions, setQuestions] = useState([
    {
      question: 'What is your age range?',
      options: ['Under 25', '25-35', '35-45', '45-55', 'Over 55'],
    },
    {
      question: 'What is your annual income?',
      options: ['$0 - $50,000', '$50,000 - $100,000', '$100,000 - $150,000', '$150,000 - $200,000', 'Over $200,000'],
    },
    {
      question: 'How much investment experience do you have?',
      options: ['None', '1-2 years', '3-5 years', '6-10 years', 'Over 10 years'],
    },
    {
      question: 'How comfortable are you with investment risk?',
      options: ['Very uncomfortable', 'Somewhat uncomfortable', 'Neutral', 'Somewhat comfortable', 'Very comfortable'],
    },
  ]);

   function handleInputChange(event) {
    const { name, value } = event.target;
    setRiskProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  }

  function handleOptionSelect(option) {
    setRiskProfile((prevProfile) => ({
      ...prevProfile,
      //[`question${questionIndex + 1}`]: option,
    }));
    setQuestionIndex(questionIndex + 5);
  } 

  function calculateRiskProfile() {
    let score = 0;
    // Calculate score based on user's answers
    score += getScoreForOption(riskProfile.age);
    score += getScoreForOption(riskProfile.income);
    score += getScoreForOption(riskProfile.investmentExperience);
    score += getScoreForOption(riskProfile.riskTolerance);
  
    // Determine risk profile based on total score
    let calculatedRiskProfile = '';
    if (score >= 5 && score <= 8) {
      calculatedRiskProfile = 'Conservative Investor';
    } else if (score >= 9 && score <= 12) {
      calculatedRiskProfile = 'Moderate Investor';
    } else if (score >= 13 && score <= 20) {
      calculatedRiskProfile = 'Aggressive Investor';
    }
  
    setRiskProfile((prevProfile) => ({
      ...prevProfile,
      riskProfile: calculatedRiskProfile,
    }));
  
    console.log('Risk profile calculated:', calculatedRiskProfile);
  }
  

  function getScoreForOption(option) {
    switch (option) {
      case 'Under 25':
        return 1;
      case '25-35':
        return 2;
      case '35-45':
        return 3;
      case '45-55':
        return 4;
      case 'Over 55':
        return 5;
      case '$0 - $50,000':
        return 1;
      case '$50,000 - $100,000':
        return 2;
      case '$100,000 - $150,000':
        return 3;
      case '$150,000 - $200,000':
        return 4;
      case 'Over $200,000':
        return 5;
      case 'None':
        return 1;
      case '1-2 years':
        return 2;
      case '3-5 years':
        return 3;
      case '6-10 years':
        return 4;
      case 'Over 10 years':
        return 5;
      case 'Very uncomfortable':
        return 1;
      case 'Somewhat uncomfortable':
        return 2;
      case 'Neutral':
        return 3;
      case 'Somewhat comfortable':
        return 4;
      case 'Very comfortable':
        return 5;
      default:
        return 0;
    }
  }
  

  return (
    <div className="risk-profiler-container">
      <h1>Risk Profiler</h1>
      {questionIndex < questions.length ? (
        // Render the current question
        <>
          <h2>{questions[questionIndex].question}</h2>
          <ul>
            {questions[questionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Render the risk profile form
        <form>
          <label>
  Age:
  <select
    name="age"
    value={riskProfile.age}
    onChange={handleInputChange}
  >
    <option value="">Select Age</option>
    <option value="under 25">Under 25</option>
    <option value="25-35">25-35</option>
    <option value="35-45">35-45</option>
    <option value="45-55">45-55</option>
    <option value="Over 55">Over 55</option>
  </select>
</label>

<label>
  Income:
  <select
    name="income"
    value={riskProfile.income}
    onChange={handleInputChange}
  >
    <option value="">Select Income</option>
    <option value="$0-$50,000">$0-$50,000</option>
    <option value="$50,000-$100,000">$50,000-$100,000</option>
    <option value="$100,000-$150,000">$100,000-$150,000</option>
    <option value="$150,000-$200,000">$150,000-$200,000</option>
    <option value="Over $200,000">Over $200,000</option>
  </select>
</label>

          <label>
            Investment Experience:
            <select
            name="investmentExperience"
            value={riskProfile.investmentExperience}
            onChange={handleInputChange}
            >
              <option value="">Select Investment Experience</option>
              <option value="None">None</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="6-10 years">6-10 years</option>
              <option value="Over 10 years">Over 10 years</option>
            </select>
          </label>
          <label>
            Risk Tolerance:
            <select
            name="riskTolerance"
            value={riskProfile.riskTolerance}
            onChange={handleInputChange}
            >
              <option value="">Select Risk Tolerance</option>
              <option value="Very uncomfortable">Very uncomfortable</option>
              <option value="Somewhat uncomfortable">Somewhat uncomfortable</option>
              <option value="Neutral">Neutral</option>
              <option value="Somewhat comfortable">Somewhat comfortable</option>
              <option value="Very comfortable">Very comfortable</option>
            </select>
          </label>
        </form>
      )}
      <button onClick={calculateRiskProfile}>
        {questionIndex < questions.length ? 'Next' : 'Calculate Risk Profile'}
      </button>
      <div className="result">
            {riskProfile.riskProfile && (
              <>
                <h2>Your risk profile:</h2>
                <p>{riskProfile.riskProfile}</p>
              </>
            )}
          </div>
    </div>
  );
  
}

export default RiskProfiler;


import React, { useState } from 'react';
import './RiskProfiler.css'; // Import the CSS file

function RiskProfiler() {
  const [riskProfile, setRiskProfile] = useState({
    age: '',
    income: '',
    investmentExperience: '',
    riskTolerance: '',
  });
  const [questionIndex, setQuestionIndex] = useState(0); // Track the index of the current question
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
      [`question${questionIndex + 1}`]: option,
    }));
    setQuestionIndex(questionIndex + 1);
  }

  function calculateRiskProfile() {
    let score = 0;
    let riskProfile = '';
    // Calculate score based on user's answers
    score += getScoreForOption(riskProfile.age);
    score += getScoreForOption(riskProfile.income);
    score += getScoreForOption(riskProfile.investmentExperience);
    score += getScoreForOption(riskProfile.riskTolerance);

    // Determine risk profile based on total score
    if (score >= 5 && score <= 8) {
      riskProfile = 'Conservative Investor';
    } else if (score >= 9 && score <= 12) {
      riskProfile = 'Moderate Investor';
    } else if (score >= 13 && score <= 16) {
      riskProfile = 'Aggressive Investor';
    }

    console.log('Risk profile calculated:', riskProfile);
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
            <input
              type="text"
              name="age"
              value={riskProfile.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Income:
            <input
              type="text"
              name="income"
              value={riskProfile.income}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Investment Experience:
            <input
              type="text"
              name="investmentExperience"
              value={riskProfile.investmentExperience}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Risk Tolerance:
            <input
              type="text"
              name="riskTolerance"
              value={riskProfile.riskTolerance}
              onChange={handleInputChange}
            />
          </label>
        </form>
      )}
      <button onClick={calculateRiskProfile}>
        {questionIndex < questions.length ? 'Next' : 'Calculate Risk Profile'}
      </button>
    </div>
  );
}

export default RiskProfiler;


// App.js
import React from 'react';
import './App.css';
import Welcomesurvey from './Component/WelcomeSurvey/Welcomesurvey';
import SurveyQuestions from './Component/Survey/Survey';

function App() {
const [showSurvey, setShowSurvey] = React.useState(false);

  return (
    <div className="App">
      { !showSurvey ? (
        <Welcomesurvey onStart={() => setShowSurvey(true)} />
      ) : (
        <SurveyQuestions />
      )}
  
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({ Good: 0, Neutral: 0, Bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const { Good, Neutral, Bad } = feedback;
  const total = Good + Neutral + Bad;
  const positivePercentage = total ? ((Good / total) * 100).toFixed(0) : 0;
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ?
          <Statistics Good={Good} Neutral={Neutral} Bad={Bad} total={total} positivePercentage={positivePercentage} />
          :
          <Notification message="There is no feedback" />
        }
      </Section>
    </div>
  );
};

// export default App;

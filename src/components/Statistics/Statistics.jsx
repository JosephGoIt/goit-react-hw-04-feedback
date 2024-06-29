import React from 'react';

const Statistics = ({ Good, Neutral, Bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: <span>{Good}</span></p>
      <p>Neutral: <span>{Neutral}</span></p>
      <p>Bad: <span>{Bad}</span></p>
      <p>Total: <span>{total}</span></p>
      <p>Positive feedback: <span>{positivePercentage}%</span></p>
    </div>
  );
};

export default Statistics;


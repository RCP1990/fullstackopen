import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
   //neutral is 0 so we can ignore
  const positive = parseFloat((good / total) * 100);

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${parseFloat(positive)}%`} />
        </tbody>
      )}
    </table>
  );
};

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App

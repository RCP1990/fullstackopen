import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Winner = ({anecdotes, votes}) => {
  let winner = Math.max(...votes)
  let index = votes.indexOf(winner)

  return (
    <>
  {winner === 0 ? (
    <p>no votes have been cast</p>
    ) : (
      <div>
        {anecdotes[index]} 
        <p>has {winner} votes </p>
      </div>
    )}
    </>
  )
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {

    let next = Math.floor(Math.random() * anecdotes.length);
    setSelected(next)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] +=1
    setVotes(newVotes) 
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes </p>
      <Button onClick={vote} text="vote"/><Button onClick={nextAnecdote} text="next anecdote"/>
      <h2>Anecdote with the most votes</h2>
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [ question , setQuestion] = useState([]);
  const [ questionState , setQuestionState ] = useState(0)

  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
    .then((res) => {
      console.log(res.data)
      setQuestion(res.data)
    }).catch((error) => {
      console.log(error);
    })
  } , [])

  function next(index){

  }


  return (
    <>
      <h1>Quiz App</h1>
      { question.length > 0 ? <div>
      <h1>Q{questionState + 1} : {question[questionState].question.text}</h1>
      <ol>
        <li>
          <input type="radio" name="choice" id="" />
        </li>
      </ol>
      <button onClick={() =>{next}}>Next</button>
      </div> : <h1>Loading....</h1>}
    </>
  )
}

export default App

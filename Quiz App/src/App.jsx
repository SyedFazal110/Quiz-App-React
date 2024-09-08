import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function App() {
  const [ question , setQuestion] = useState([]);
  const [ questionState , setQuestionState ] = useState(0)


  const checkedInput = useRef([])

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
    const checkedButton = checkedInput.current.find( input => input.checked)
    if(checkedButton){
      selectedValue = checkedButton.selectedValue
      console.log("You Selected : " , selectedValue)
    }
    questionState < question.length - 1 ? setQuestionState(questionState + 1) : alert("question khtm hogaye maalik")
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }


  return (
    <>
      <h1>Quiz App</h1>
      { question.length > 0 ? <div>
      <h1>Q{questionState + 1} : {question[questionState].question.text}</h1>
      <ol>
        <li>
          <input type="radio" name="choice" id="" />
          <label htmlFor={item}>{item}</label>
        </li>
      </ol>
      <button onClick={() =>{next}}>Next</button>
      </div> : <h1>Loading....</h1>}
    </>
  )
}

export default App

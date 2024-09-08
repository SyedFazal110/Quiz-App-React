// import { useEffect, useRef, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [ question , setQuestion] = useState([]);
//   const [ questionState , setQuestionState ] = useState(0)


//   const checkedInput = useRef([])

//   useEffect(() => {
//     axios('https://the-trivia-api.com/v2/questions')
//     .then((res) => {
//       console.log(res.data)
//       setQuestion(res.data)
//     }).catch((error) => {
//       console.log(error);
//     })
//   } , [])

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));

//       [array[i], array[j]] = [array[j], array[i]];
//     }
    
//     return array;
//   }

//   function next(index){
//     const checkedButton = checkedInput.current.find( input => input.checked)
//     if(checkedButton){
//       const selectedValue = checkedButton.value
//       console.log("You Selected : ",selectedValue)
//     }
//     questionState < question.length - 1 ? setQuestionState(questionState + 1) : alert("Completed")
//   }


//   return (
//     <>
//       <h1>Quiz App</h1>
//       { question.length > 0 ? <div>
//       <h1>Q{questionState + 1} : {question[questionState].question.text}</h1>
//       <ul>
//       {shuffleArray([...question[questionState].incorrectAnswers , question[questionState].correctAnswer]).map((item , index)=>{
//             return <li key={index}>
//             <input type="radio" name='choice' id={item} value={item} ref={el => (checkedInput.current[index] = el)}/>
//             <label htmlFor={item}>{item}</label>
//           </li>
          
//           })}
//       </ul>
//       <button onClick={() =>{next()}}>Next</button>
//       </div> : <h1>Loading....</h1>}
//     </>
//   )
// }

// export default App




import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './index.css'; // Make sure to create this CSS file and add the styles below

function App() {
  const [question, setQuestion] = useState([]);
  const [questionState, setQuestionState] = useState(0);
  const checkedInput = useRef([]);

  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function next() {
    const checkedButton = checkedInput.current.find(input => input.checked);
    if (checkedButton) {
      const selectedValue = checkedButton.value;
      console.log("You Selected:", selectedValue);
    }
    setQuestionState(prevState => (prevState < question.length - 1 ? prevState + 1 : alert("Completed")));
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Quiz App</h1>
      {question.length > 0 ? (
        <div className="quiz-container">
          <h2 className="question-text">
            Q{questionState + 1}: {question[questionState].question.text}
          </h2>
          <ul className="answers-list">
            {shuffleArray([...question[questionState].incorrectAnswers, question[questionState].correctAnswer]).map((item, index) => (
              <li key={index} className="answer-item">
                <input
                  type="radio"
                  name="choice"
                  id={item}
                  value={item}
                  ref={el => (checkedInput.current[index] = el)}
                />
                <label htmlFor={item} className="answer-label">{item}</label>
              </li>
            ))}
          </ul>
          <button className="next-button" onClick={next}>Next</button>
        </div>
      ) : (
        <h2 className="loading-text">Loading...</h2>
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["Let Me Sleep On It, and Get Back To You Tomorrow", 'Not A Chance', "Don't Count On It", "My Reply Is No", 'Outlook Not So Good', 'My Sources Say No', "Hold On I'm On The Phone"],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    // Update the return statement below to reflect the outcome of your code.
    let randomNum = Math.floor(Math.random() * 8);
    return answerArray[randomNum]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p className = "answers"> { this.state.answer }</p>
      </div>
    )
  }
}

export default App;

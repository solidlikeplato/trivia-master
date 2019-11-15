import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import QuestionPage from './pages/QuestionPage'
import NavBar from './components/NavBar/NavBar'
import Question from './components/Question/Question'
import api from './api/triviaAPI'

function App() {

  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <hr/>
          <Route exact path='/' component={HomePage} />
          <Route path='/quiz' component={QuestionPage} />
        </div>
      </Router>
    </div>
  )
}

export default App;

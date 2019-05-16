import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import PageStart from './components/PageStart/PageStart';
import PageGameSelect from './components/PageGameSelect/PageGameSelect';
import PageCharacterSelect from './components/PageCharacterSelect/PageCharacterSelect';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={PageStart} />
        <Route path="/PageGameSelect" component={PageGameSelect} />
        <Route path="/PageCharacterSelect" component={PageCharacterSelect} />
      </div>
    </Router>
  );
}

export default App;

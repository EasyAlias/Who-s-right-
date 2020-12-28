import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage/firstPage';
// import MainPage from './';
// import CurrentDisputesPage from './';
// import OneCurrentDisputesPage from './';
// import ArchivePage from './';
// import OneArchivePage from './';

import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Route path="/" exact component={FirstPage} />
        {/* <Route path='/main' exact component={MainPage} />
        <Route path='/current_disputes' exact component={CurrentDisputesPage} />
        <Route path='/current_disputes/:id' exact component={OneCurrentDisputesPage} />
        <Route path='/archive' exact component={ArchivePage} />
        <Route path='/archive/:id' exact component={OneArchivePage} /> */}
      </div>
    )
  }
}

export default App;
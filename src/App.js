import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ZFormPage from './pages/Form/ZFormPage';
import ZHomePage from './pages/Home/ZHomePage';
import ZStudentsPage from './pages/Students/ZStudentsPage';
import ZTemplatesPage from './pages/Templates/ZTemplatesPage';
import ZNoPage from './pages/NoPage/ZNoPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ZHomePage} />
          <Route path='/students' component={ZStudentsPage} />
          <Route path='/templates' component={ZTemplatesPage} />
          <Route path='/form' component={ZFormPage} />
          <Route component={ZNoPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

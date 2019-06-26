import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ZFormPage from './pages/Form/ZFormPage';
import ZHomePage from './pages/Home/ZHomePage';
import ZStudentsPage from './pages/Students/ZStudentsPage';
import ZTemplatesPage from './pages/Templates/ZTemplatesPage';
import ZNoPage from './pages/NoPage/ZNoPage';
import ZCertifactePage from './pages/Certificate/ZCertificatePage';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listStudents: [],
      //listCourses:[],
      //activeStudent:'',
      //activeCourse:''
    };

    //fetch data
    //REMOTE WAITING FOR DEPLOY
    let url = 'https://zertify-api.herokuapp.com/zstudents';
    // LOCAL
    //let url = 'http://localhost:4000/zstudents';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listStudents: data,
          //listCourses: data.courses
        });
        console.log('fetch data ', this.state.listStudents);
      });
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={ZHomePage} />
            {/* <Route path='/students' component={ZStudentsPage} /> */}
            {/* passing state to router component to pass them to the page and then to the component */}
            <Route
              path='/students'
              render={() => (
                <ZStudentsPage listStudents={this.state.listStudents} />
              )}
            />
            <Route path='/templates' component={ZTemplatesPage} />
            <Route path='/form' component={ZFormPage} />
            <Route path='/certificate' component={ZCertifactePage} />
            <Route component={ZNoPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

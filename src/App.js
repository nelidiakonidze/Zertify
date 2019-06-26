import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ZFormPage from './pages/Form/ZFormPage';
import ZHomePage from './pages/Home/ZHomePage';
import ZStudentsPage from './pages/Students/ZStudentsPage';
import ZCoursesPage from './pages/Courses/ZCoursesPage';
import ZTemplatesPage from './pages/Templates/ZTemplatesPage';
import ZNoPage from './pages/NoPage/ZNoPage';
import ZCertifactePage from './pages/Certificate/ZCertificatePage';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listStudents: [],
      listCourses: [],
      //activeStudent:'',
      //activeCourse:''
    };

    //fetch data for students
    //REMOTE WAITING FOR DEPLOY
    //let url = 'https://postgres-zertify-api.herokuapp.com/zstudents';
    // LOCAL
    let urlStudents = 'http://localhost:4000/zstudents';
    fetch(urlStudents)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listStudents: data,
          //listCourses: data.courses
        });
        console.log('fetch data ', this.state.listStudents);
      })
      .catch(error => console.log('error: ', error));

    //fetch data for courses
    let urlCourses = 'http://localhost:4000/zcourses';
    fetch(urlCourses)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listCourses: data,
        });
        console.log('fetch data ', this.state.listStudents);
      })
      .catch(error => console.log('error: ', error));
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
            <Route
              path='/courses'
              render={() => (
                <ZCoursesPage listCourses={this.state.listCourses} />
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

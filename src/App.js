import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ZFormPage from './pages/Form/ZFormPage';
import ZHomePage from './pages/Home/ZHomePage';
import ZStudentsPage from './pages/Students/ZStudentsPage';
import ZTemplatesPage from './pages/Templates/ZTemplatesPage';
import ZNoPage from './pages/NoPage/ZNoPage';
import ZCertifactePage from './pages/Certificate/ZCertificatePage';
import ZpdfCertifacteSent from './components/certificates/ZpdfCertificateSent';
import ZHelpPage from './pages/Help/ZHelpPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudents: [],
      listCourses: [],
      selectedStudent: {},
      selectedTemplate: 0, // first template by default
      selectedColor: '#90caf9', // blue by default,
      studentsLoading: true,
    };

    this.urlCourses = 'https://zertify-server.herokuapp.com/api/courses/';
    this.urlStudents = 'https://zertify-server.herokuapp.com/api/students/';

    this.selectStudent = this.selectStudent.bind(this);
    this.selectTemplate = this.selectTemplate.bind(this);
    this.setColor = this.setColor.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.updateFetchCoursesHandler = this.updateFetchCoursesHandler.bind(this);
    this.updateFetchStudentsHandler = this.updateFetchStudentsHandler.bind(
      this,
    );

    //fetch data for students
    this.updateFetchStudentsHandler();

    //fetch data for courses
    this.updateFetchCoursesHandler();
  }

  updateFetchCoursesHandler() {
    //fetch data for courses
    fetch(this.urlCourses)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listCourses: data.courses,
          coursesLoading: false,
        });
        console.log('fetch courses data ', this.state.listCourses);
      })
      .catch(error => console.log('error: ', error));
  }

  updateFetchStudentsHandler() {
    //fetch data for students
    fetch(this.urlStudents)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listStudents: data.students,
          studentsLoading: false,
        });
        console.log('listStudents:', this.state.listStudents);
        console.log('fetch students data ', this.state.listStudents);
      })
      .catch(error => console.log('error: ', error));
  }

  // Delete row with student when onClick Bin Icon
  // -> Student get´s deleted from database
  // -> rerender of table without the student
  deleteOnClick(id) {
    id = parseInt(id);
    const options = {
      method: 'DELETE',
    };

    fetch(`https://zertify-server.herokuapp.com/api/students/${id}`, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(state => {
          return {
            listStudents: state.listStudents.filter(
              student => student.id !== id,
            ),
          };
        });
        window.confirm(
          `Are you sure to delete ${data.student.firstName} ${
            data.student.lastName
          }`,
        );
      })
      .catch(error => console.log(error));
    console.log('backend is calling');
  }

  /** update the state of the selected template via its css color style */
  selectTemplate(index) {
    this.setState({selectedTemplate: index});
    this.setColor(index);
  }

  setColor(index) {
    switch (index) {
      case 0:
        return this.setState({selectedColor: '#90caf9'}); //blue
      case 1:
        return this.setState({selectedColor: '#bcaaa4'}); //brown
      case 2:
        return this.setState({selectedColor: '#80cbc4'}); //green
      default:
        return this.setState({selectedColor: '#80cbc4'}); //green
    }
  }

  selectStudent(id) {
    const selectedStudent = this.state.listStudents.find(
      student => student.id === id,
    );
    this.setState({selectedStudent});
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={ZHomePage} />
            <Route
              path='/students'
              render={() => (
                <ZStudentsPage
                  listStudents={this.state.listStudents}
                  selectStudent={this.selectStudent}
                  deleteOnClick={this.deleteOnClick}
                  circularProgress={this.state.studentsLoading}
                />
              )}
            />
            <Route
              path='/form'
              render={() => (
                <ZFormPage
                  listCourses={this.state.listCourses}
                  updateFetchCoursesHandler={this.updateFetchCoursesHandler}
                  updateFetchStudentsHandler={this.updateFetchStudentsHandler}
                />
              )}
            />
            <Route
              path='/templates'
              render={() => (
                <ZTemplatesPage
                  selectTemplate={this.selectTemplate}
                  selectedTemplate={this.state.selectedTemplate}
                />
              )}
            />
            <Route
              exact
              path='/certificate'
              render={() => (
                <ZCertifactePage
                  selectedStudent={this.state.selectedStudent}
                  selectedColor={this.state.selectedColor}
                />
              )}
            />

            <Route
              exact
              path='/edera/:hash/certificate.pdf'
              component={ZpdfCertifacteSent}
            />

            <Route path='/help' component={ZHelpPage} />

            <Route component={ZNoPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

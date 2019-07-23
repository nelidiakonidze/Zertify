import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import ZFormPage from './pages/Form/ZFormPage';
import ZHomePage from './pages/Home/ZHomePage';
import ZStudentsPage from './pages/Students/ZStudentsPage';
import ZTemplatesPage from './pages/Templates/ZTemplatesPage';
import ZNoPage from './pages/NoPage/ZNoPage';
import ZCertifactePage from './pages/Certificate/ZCertificatePage';
import ZpdfCertifacteSent from './components/certificates/ZpdfCertificateSent';

import './components/Spinner.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listStudents: [],
      listCourses: [],
      selectedStudent: {},
      selectedTemplate: 0, // first template by default
      selectedColor: '#90caf9', // blue by default,
      studentsLoading: true,
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.selectTemplate = this.selectTemplate.bind(this);
    this.setColor = this.setColor.bind(this);
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.sendEmail = this.sendEmail.bind(this);

    //fetch data for students

    let urlStudents = 'https://zertify-server.herokuapp.com/api/students/';
    fetch(urlStudents)
      .then(response => response.json())
      .then(data => {
        this.setState({
          listStudents: data.students,
          //studentsLoading: false,
        });
        console.log('fetch students data ', this.state.listStudents);
      })
      .catch(error => console.log('error: ', error));

    //fetch data for courses
    let urlCourses = 'https://zertify-server.herokuapp.com/api/courses/';
    fetch(urlCourses)
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

  // // Delete row with student when onClick Bin Icon
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

  // post the certificate informations
  sendEmail() {
    const urlCertificate =
      'https://zertify-server.herokuapp.com/api/certificate';
    const Zconfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hash: 'hashABC',
        settings: JSON.stringify({
          firstName: this.state.selectedStudent.firstName,
          lastName: this.state.selectedStudent.lastName,
          email: this.state.selectedStudent.email,
          name: this.state.selectedStudent.courses[0].name,
          hours: this.state.selectedStudent.courses[0].hours,
          color: this.state.selectedColor,
        }),
      }),
    };

    fetch(urlCertificate, Zconfig)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          alert('Email sent');
        }
      })
      .catch(event => {
        console.error(event);
        alert("Sorry, we're having trouble sending your email");
      });
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
    console.log('active student', selectedStudent);
  }

  render() {
    //if (this.state.coursesLoading || this.state.studentsLoading) {
     /// return <CircularProgress className= 'CircularProgress'/>
    //} else {
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
                    circularProgress={this.state.studentLoading}
                    
                    //showSpinner={this.state.showSpinner}
                  />
                )}
              />
              <Route
                path='/form'
                render={() => (
                  <ZFormPage listCourses={this.state.listCourses} />
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
                    sendEmail={this.sendEmail}
                  />
                )}
              />

              <Route
                path='/certificate/sent'
                render={() => (
                  <ZpdfCertifacteSent
                    selectedStudent={this.state.selectedStudent}
                    selectedColor={this.state.selectedColor}
                  />
                )}
              />

              <Route component={ZNoPage} />
            </Switch>
          </div>
        </Router>
      );
    }
  }


export default App;

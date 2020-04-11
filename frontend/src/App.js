import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';
import AddCourse from './components/AddCourse'
import StudentHome from './components/StudentHome'
import Status from './components/Status';
import TutorCourse from './components/TutorCourse';
import TutorHome from './components/TutorHome';
import AdminWaiting from './components/AdminWaiting';
import AdminSuccess from './components/AdminSuccess';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from "redux";

const App = () => {

  return (
    <Provider store={createStore(combineReducers({
      student: (state = {
        student: {
          id: 1
        }

      }, action) => {
        switch (action.type) {
          default:
            return state
        }
      },
      teacher: (state = {
        teacher: {
          id: 1
        }

      }, action) => {
        switch (action.type) {
          default:
            return state
        }
      },
      course: (state = {
        courses: [],
        course: {
          description: '',
          name: '',
          price: '',
          status: '',
          studentId: '',
          teacherId: ''
        }
      }, action) => {
        switch (action.type) {
          default:
            return state
        }
      },
      offer: (state = {
        offers: [],
        offer: {
          courseId: '',
          teacherId: ''
        }
      }, action) => {
        switch (action.type) {
          default:
            return state
        }
      }
    }))}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={StudentHome}
            exact={true}
          />
          <Route
            path="/status"
            component={Status}
            exact={true}
          />
          <Route
            path="/add"
            component={AddCourse}
            exact={true}
          />
          <Route
            path="/course"
            component={TutorCourse}
            exact={true}
          />
          <Route
            path="/home"
            component={TutorHome}
            exact={true}
          />
          <Route
            path="/waiting"
            component={AdminWaiting}
            exact={true}
          />
          <Route
            path="/success"
            component={AdminSuccess}
            exact={true}
          />
        </Switch>
      </BrowserRouter>

    </Provider>

  )

}
export default App
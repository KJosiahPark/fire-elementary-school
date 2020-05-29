import React from 'react';

import Controller from './controller'

class DataDisplay extends React.Component {
  state = {
    classes: {},
    teachers: {},
    students: {}
  }

  onValue = (dataGroup, val) => {
    this.setState((prevState) => {
      if (val !== null) {
        prevState[dataGroup] = val;
        return prevState;
      } else {
        prevState[dataGroup] = {};
        return prevState;
      }
    })
  }

  componentDidMount = () => {
    Controller.setUpOnValue(this.onValue);
  }

  isNullOrEmpty

  render = () => {
    const {
      handleRemoveClassRequest,
      handleRemoveTeacherRequest,
      handleRemoveStudentRequest
    } = this.props
    const {
      classes, 
      teachers,
      students
    } = this.state;
    
    return (
      <div>
        <button onClick={() => console.log(this.state)}>print database state</button>
        <h1>Classes List</h1>
        {Object.keys(classes).map((key, index) => {
          const classListing = classes[key];
          return <p key={key}>
            {classListing.name} <button onClick={() => {handleRemoveClassRequest(key)}}>delet</button>
          </p>;
        })}
        <h1>Teachers List</h1>
        {Object.keys(teachers).map((key, index) => {
          const teacher = teachers[key];
          return <p key={key}>
            {teacher.lastName} <button onClick={() => {handleRemoveTeacherRequest(key)}}>delet</button>
          </p>;
        })}
        <h1>Students List</h1>
        {Object.keys(students).map((key, index) => {
          const student = students[key];
          return <p key={key}>
            {student.lastName} <button onClick={() => {handleRemoveStudentRequest(key)}}>delet</button>
          </p>;
        })}
      </div>
    )
  }
}

export default DataDisplay;
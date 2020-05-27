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
      prevState[dataGroup] = val;
      return prevState;
    })
  }

  componentDidMount = () => {
    Controller.setUpOnValue(this.onValue);
  }

  render = () => {
    return (
      <div>
        <button onClick={() => console.log(this.state)}>print state</button>
        <h1>Classes List</h1>
          {Object.keys(this.state.classes).map((key, index) => {
            const classListing = this.state.classes[key];
            return <p>{classListing.name}</p>;
          })}
        <h1>Teachers List</h1>
          {Object.keys(this.state.teachers).map((key, index) => {
            const teacher = this.state.teachers[key];
            return <p>{teacher.lastName}</p>;
          })}
        <h1>Students List</h1>
          {Object.keys(this.state.students).map((key, index) => {
            const student = this.state.students[key];
            return <p>{student.lastName}</p>;
          })}
      </div>
    )
  }
}

export default DataDisplay;
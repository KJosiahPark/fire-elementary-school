import React from 'react';

import Controller from '../controller'

class DataDisplay extends React.Component {
  state = {
    classes: {},
    classTeacherInput: {},
    teachers: {},
    students: {},
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

  updateTeacherClassAssign = (classKey, event) => {
    let x = event.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        classTeacherInput: {
          ...prevState.classTeacherInput,
          [classKey]: x,
        },
      }
    });
  }

  submitTeacherClassAssign = (classKey) => {
    this.props.handleAssignTeacherToClassRequest(classKey, this.state.classTeacherInput[classKey]);

    this.setState((prevState) => {
      return {
        ...prevState,
        classTeacherInput: {
          ...prevState.classTeacherInput,
          [classKey]: "",
        },
      }
    });
  }

  render = () => {
    const {
      handleRemoveClassRequest,
      handleRemoveTeacherRequest,
      handleRemoveStudentRequest,
    } = this.props
    const {
      classes,
      classTeacherInput,
      teachers,
      students,
    } = this.state;

    return (
      <div>
        <button onClick={() => console.log(this.state)}>print database state</button>
        <h1>Classes List</h1>
        {Object.keys(classes).map((key, index) => {
          const classListing = classes[key];
          return <p key={key}>
            {Object.values(classListing).join(" | ")}
            <input
              list="teacherSelect"
              placeholder="assign teacher"
              value={classTeacherInput[key] !== undefined ? classTeacherInput[key].l : "" }
              onChange={(event) => {
                this.updateTeacherClassAssign(key, event);
              }} />
            <datalist id="teacherSelect">
              {Object.keys(teachers).map((k, i) => {
                return <option key={k} value={k}>{teachers[k].lastName}, {teachers[k].firstName}</option>
              })}
            </datalist>
            <button onClick={() => {
              this.submitTeacherClassAssign(key);
            }}>assign teacher</button>
            <button onClick={() => { handleRemoveClassRequest(key) }}>delet</button>
          </p>;
        })}
        <h1>Teachers List</h1>
        {Object.keys(teachers).map((key, index) => {
          const teacher = teachers[key];
          return <p key={key}>
            {Object.values(teacher).join(" | ")} <button onClick={() => { handleRemoveTeacherRequest(key) }}>delet</button>
          </p>;
        })}
        <h1>Students List</h1>
        {Object.keys(students).map((key, index) => {
          const student = students[key];
          return <p key={key}>
            {Object.values(student).join(" | ")} <button onClick={() => { handleRemoveStudentRequest(key) }}>delet</button>
          </p>;
        })}
      </div>
    )
  }
}

export default DataDisplay;
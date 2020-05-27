class Controller {
  static registerClass = (className) => {
    console.log(className);
  }

  static registerTeacher = (lastName, firstName) => {
    // console.log(lastName);
    console.log(`${lastName} ${firstName}`);
  }

  static registerStudent = (lastName, firstName) => {
    console.log(`${lastName} ${firstName}`);
  }
}

export default Controller;
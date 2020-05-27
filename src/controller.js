import Firebase from './Firebase'

class Controller {
  static fireb = new Firebase();
  
  static registerClass = (className) => {
    console.log(`registering class: ${className} ...`);
    Controller.fireb.db.ref("root/school-data/classes").push({name: className});
  }

  static registerTeacher = (lastName, firstName) => {
    console.log(`registering teacher: ${lastName} ${firstName} ...`);
  }

  static registerStudent = (lastName, firstName) => {
    console.log(`registering student: ${lastName} ${firstName} ...`);
  }
}

export default Controller;
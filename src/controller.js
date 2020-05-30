import Firebase from './Firebase'

// What is the difference between onStateChange -> send state to firebase

class Controller {
  static fireb = new Firebase();

  // database event handler
  static setUpOnClassesValue = (onClassValueFunc) => {
    Controller.fireb.db.ref('root/school-data/classes/').on('value',
    (snapshot) => {
      onClassValueFunc(snapshot.val());
    },
    (err) => console.log(err));
  }
  static removeOnClassesValue = () => {
    Controller.fireb.db.ref('root/school-data/classes/').off();
  }
  static setUpOnTeachersValue = (onTeacherValueFunc) => {
    Controller.fireb.db.ref('root/school-data/teachers/').on('value',
    (snapshot) => {
      onTeacherValueFunc(snapshot.val());
    },
    (err) => console.log(err));
  }
  static removeOnTeachersValue = () => {
    Controller.fireb.db.ref('root/school-data/teachers/').off();
  }
  static setUpOnStudentsValue = (onStudentValueFunc) => {
    Controller.fireb.db.ref('root/school-data/students/').on('value',
    (snapshot) => {
      onStudentValueFunc(snapshot.val());
    },
    (err) => console.log(err));
  }
  static removeOnStudentsValue = () => {
    Controller.fireb.db.ref('root/school-data/students/').off();
  }
  
  // handle database edits
  static registerClass = (className) => {
    console.log(`registering class: ${className} ...`);
    Controller.fireb.db.ref("root/school-data/classes/").push({name: className});
  }
  static registerTeacher = (lastName, firstName, salary) => {
    console.log(`registering teacher: ${lastName} ${firstName} $: ${salary} ...`);
    const teacher = {
      lastName: lastName,
      firstName: firstName,
      salary: salary,
    }
    Controller.fireb.db.ref("root/school-data/teachers/").push(teacher);
  }
  static registerStudent = (lastName, firstName, year) => {
    console.log(`registering student: ${lastName} ${firstName} yr: ${year}...`);
    const student = {
      lastName: lastName,
      firstName: firstName,
      year: year,
    }
    Controller.fireb.db.ref("root/school-data/students/").push(student);
  }

  static assignClassToTeacher = (classId, teacherId) => {
    console.log(`assigning: ${teacherId} to ${classId} ...`);
    Controller.fireb.db.ref(`root/school-data/classes/${classId}`).update({teacher: teacherId});
  }
  static assignStudentToClass = (studentId, classId) => {
    console.log(`enrolling: ${studentId} in ${classId} ...`);
    Controller.fireb.db.ref(`root/school-data/students/${studentId}/enrollment`).push(classId);

  }

  static removeClass = (classId) => {
    console.log(`removing class: ${classId} ...`);
    Controller.fireb.db.ref(`root/school-data/classes/${classId}`).remove();
  }
  static removeTeacher = (teacherId) => {
    console.log(`removing teacher: ${teacherId} ...`);
    Controller.fireb.db.ref(`root/school-data/teachers/${teacherId}`).remove();
  }
  static removeStudent = (studentId) => {
    console.log(`removing student: ${studentId} ...`);
    Controller.fireb.db.ref(`root/school-data/students/${studentId}`).remove();
  }

  // login event handler
  static setUpOnAccount = (onUserFunc) => {
    return Controller.fireb
    .auth.onAuthStateChanged(onUserFunc);
  }

  // user account handling for email & password user
  static signUpUserEP = (email, password) => {
    return Controller.fireb
    .registerUserWithEmailAndPassword(email, password)
  }
  static signInUserEP = (email, password) => {
    return Controller.fireb
    .signInUserWithEmailAndPassword(email, password)
  }
  static signOutUserEP = () => {
    Controller.fireb
    .signOutUser()
    .then(() => {
      console.log("logged out");
    })
    .catch(error => {
      console.log(error);
    });
  }

}

export default Controller;
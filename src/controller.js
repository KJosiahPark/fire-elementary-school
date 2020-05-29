import Firebase from './Firebase'

// What is the difference between onStateChange -> send state to firebase

class Controller {
  static fireb = new Firebase();

  static setUpOnValue = (onValueFunc) => {
    Controller.fireb.db.ref('root/school-data/classes/').on('value',
    (snapshot) => {
      onValueFunc("classes", snapshot.val());
    },
    (err) => console.log(err));
    Controller.fireb.db.ref('root/school-data/teachers/').on('value',
    (snapshot) => {
      onValueFunc("teachers", snapshot.val());
    },
    (err) => console.log(err));
    Controller.fireb.db.ref('root/school-data/students/').on('value',
    (snapshot) => {
      onValueFunc("students", snapshot.val());
    },
    (err) => console.log(err));
  }
  
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

  static assignTeacherToClass = (classId, teacherId) => {
    console.log(`assigning: ${teacherId} to ${classId} ...`);
    Controller.fireb.db.ref(`root/school-data/classes/${classId}`).update({teacher: teacherId});
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

  // user account handling for email & password user
  static signUpUserEP = (email, password) => {
    Controller.fireb
    .registerUserWithEmailAndPassword(email, password).then(authUser => {
      //
    })
    .catch(error => {
      console.log(error);
    });
  }

  static signInUserEP = (email, password) => {
    Controller.fireb
    .signInUserWithEmailAndPassword(email, password).then(authUser => {
      //
    })
    .catch(error => {
      console.log(error);
    });
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

  // handling login status
  static setUpOnAccount = (onUserFunc) => {
    Controller.fireb
    .auth.onAuthStateChanged(onUserFunc);
  }
}

export default Controller;
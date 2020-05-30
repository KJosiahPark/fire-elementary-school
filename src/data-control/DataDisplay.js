import React, { useState, useEffect } from 'react';

import ClassDisplay from './ClassDisplay';
import TeacherDisplay from './TeacherDisplay';
import StudentDisplay from './StudentDisplay';
import Controller from '../controller';

const DataDisplay = () => {
  const [teachers, setTeachers] = useState({});
  const [classes, setClasses] = useState({});

  return (
    <div>
      <ClassDisplay
        classes={classes}
        setClasses={setClasses}
        teachers={teachers}/>
      <TeacherDisplay
        teachers={teachers}
        setTeachers={setTeachers} />
      <StudentDisplay
        classes={classes}/>
    </div>
  )
}

export default DataDisplay;
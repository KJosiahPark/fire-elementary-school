import React, { useState, useEffect } from 'react';

import ClassDisplay from './ClassDisplay';
import TeacherDisplay from './TeacherDisplay';
import StudentDisplay from './StudentDisplay';
import Controller from '../controller';

const DataDisplay = ({trunc}) => {
  const [teachers, setTeachers] = useState({});
  const [classes, setClasses] = useState({});

  return (
    <div>
      <ClassDisplay
        trunc={trunc}
        classes={classes}
        setClasses={setClasses}
        teachers={teachers} />
      <TeacherDisplay
        trunc={trunc}
        teachers={teachers}
        setTeachers={setTeachers} />
      <StudentDisplay
        trunc={trunc}
        classes={classes} />
    </div>
  )
}

export default DataDisplay;
import React from 'react';

import ClassDisplay from './ClassDisplay';
import TeacherDisplay from './TeacherDisplay';
import StudentDisplay from './StudentDisplay';

class DataDisplay extends React.Component {
  render = () => {
    return (
      <div>
        <ClassDisplay />
        <TeacherDisplay />
        <StudentDisplay />
      </div>
    )
  }
}

export default DataDisplay;
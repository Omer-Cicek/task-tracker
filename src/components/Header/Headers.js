import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddTask from '../AddTask/AddTask';

const Headers = ({ setTaskList }) => {
  const [showBar, setShowBar] = useState(false);
  return (
    <div>
      <h1>Task Tracker</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => setShowBar(!showBar)}
      >
        {!showBar ? 'Show Add Task Bar ' : 'Close Add Task Bar '}
      </Button>
      {showBar && <AddTask setTaskList={setTaskList} />}
    </div>
  );
};

export default Headers;

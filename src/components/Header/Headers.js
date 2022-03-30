import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddTask from '../AddTask/AddTask';

const Headers = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <div>
      <h1>Task Tracker</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => setShowBar(!showBar)}
      >
        Show Add Task Bar
      </Button>
      {showBar && <AddTask />}
    </div>
  );
};

export default Headers;

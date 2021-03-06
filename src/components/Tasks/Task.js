import React from 'react';
import TaskDisplay from './TaskDisplay';
import Box from '@mui/material/Box';

const taskCssProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Task = ({ taskList, deleteHandler }) => {
  return (
    <div>
      <Box sx={taskCssProperties}>
        {taskList.map((item) => (
          <TaskDisplay
            item={item}
            key={item.id}
            deleteHandler={deleteHandler}
          />
        ))}
      </Box>
    </div>
  );
};

export default Task;

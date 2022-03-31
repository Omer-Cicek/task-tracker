import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTask = ({ setTaskList }) => {
  const [inputTask, setInputTask] = useState({
    task: '',
    dayTime: '2018-12-14T20:30',
    id: uuidv4(),
    lineOver: false,
  });

  const handleSubmit = () => {
    if (inputTask.task === '') {
      toast.error('Please enter a task!');
    } else if (inputTask.task.length < 3) {
      toast.error('Task must be  at least 3 characters long!');
    } else {
      setTaskList(inputTask);
      toast.success('Task added!');
    }
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          '& > :not(style)': {
            m: 1,
            width: '400px ',
            mt: '25px',
          },
        }}
      >
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Task"
          onChange={(e) => setInputTask({ ...inputTask, task: e.target.value })}
          value={inputTask.task}
          required
        />
        {/* textfield that get time and date from user */}
        <TextField
          id="datetime-local"
          label="Day & Time"
          type="datetime-local"
          value={inputTask.dayTime}
          onChange={(e) =>
            setInputTask({ ...inputTask, dayTime: e.target.value })
          }
          sx={{ width: 400 }}
        />
      </Box>

      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={() => {
          handleSubmit();
          setInputTask({
            task: '',
            dayTime: '2018-12-14T20:30',
            id: uuidv4(),
            lineOver: false,
          });
        }}
        sx={{ width: '400px', mt: '20px', background: '#711A75' }}
      >
        Save Tasks
      </Button>
    </>
  );
};

export default AddTask;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTask = ({ setTaskList }) => {
  const [inputTask, setInputTask] = useState({
    task: '',
    dayTime: '',
  });

  return (
    <>
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
        />
        <TextField
          id="datetime-local"
          label="Day & Time"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          onChange={(e) =>
            setInputTask({ ...inputTask, dayTime: e.target.value })
          }
          sx={{ width: 400 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={() => {
          setTaskList(inputTask);
          setInputTask('');
        }}
        sx={{ width: '400px', mt: '20px', background: '#711A75' }}
      >
        Save Tasks
      </Button>
    </>
  );
};

export default AddTask;

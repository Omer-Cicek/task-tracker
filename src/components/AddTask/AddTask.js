import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddTask = () => {
  return (
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
      <TextField id="demo-helper-text-misaligned-no-helper" label="Task" />
      <TextField
        id="demo-helper-text-misaligned-no-helper"
        label="Day & Time"
      />
    </Box>
  );
};

export default AddTask;

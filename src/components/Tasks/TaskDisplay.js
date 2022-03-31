import React from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

// properties of Box container inside return
const taskDisplayCssProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '500px',
  position: 'relative',
  p: 0,
  m: 1,
  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
  border: 'none',
  borderRadius: 2,
};

const TaskDisplay = ({ item, deleteHandler, overLineHandler }) => {
  return (
    <div onDoubleClick={() => overLineHandler(item.id)}>
      <Box component="span" sx={taskDisplayCssProps}>
        {/* displaying tasks */}
        <p>{item.task}</p>
        {/* dixplaying close button  */}
        <CloseIcon
          onClick={() => deleteHandler(item.id)}
          style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}
        />
        {/* displaying daytime */}
        <p>
          {item.dayTime.split('T')[0]} -- {item.dayTime.split('T')[1]}
        </p>
      </Box>
    </div>
  );
};

export default TaskDisplay;

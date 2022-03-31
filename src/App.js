import './App.css';
import Headers from './components/Header/Headers';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Task from './components/Tasks/Task';

const theme = createTheme({
  palette: {
    background: {
      default: 'lightYellow',
    },
  },
});

function App() {
  const [taskList, setTaskList] = useState([]);
  const listHandler = (task) => {
    setTaskList([task, ...taskList]);
  };
  const deleteHandler = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { background: 'linear-gradient(to right, #a79c86, #5fff85) ' },
        }}
      />
      <div className="App">
        <Headers setTaskList={listHandler} />

        <Task taskList={taskList} deleteHandler={deleteHandler} />
      </div>
    </ThemeProvider>
  );
}

export default App;

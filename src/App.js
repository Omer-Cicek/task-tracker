import './App.css';
import Headers from './components/Header/Headers';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'lightYellow',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { background: 'linear-gradient(to right, #a79c86, #5fff85) ' },
        }}
      />
      <div className="App">
        <Headers />
      </div>
    </ThemeProvider>
  );
}

export default App;
// background : linear-gradient(90deg, )

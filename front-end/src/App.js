import { Typography } from "@mui/material";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Hello World</Typography>
        <Button variant="contained" color="primary">
          This is a button
        </Button>
      </header>
    </div>
  );
}

export default App;

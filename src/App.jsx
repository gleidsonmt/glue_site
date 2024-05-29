import { useState } from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex justify-start">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <button className="text-red-500">My Button</button>
      <Button>My Button</Button>
    </div>
  );
}

export default App;

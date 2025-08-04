import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-600" data-testid="testdiv">
      Hi from Netflix Gpt 2
    </div>
  );
}

export default App;

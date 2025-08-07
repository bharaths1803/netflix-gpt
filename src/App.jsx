import { Provider } from "react-redux";
import Body from "./_components/Body.jsx";
import appStore from "./utils/appStore.js";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

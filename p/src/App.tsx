import "./App.css";
import FillCom from "./componettes/FillCom";

import { fileTree } from "./data/FileTree";

function App() {
  return <div className="m-4">

    < FillCom fileTree={fileTree}/>
  </div>;
}

export default App;

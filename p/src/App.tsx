import "./App.css";
import FillCom from "./componettes/FillCom";

import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div>
      {fileTree.children?.map((file,index) => (
        <FillCom filename={file.name} key={index}/>
      ))}
    </div>
  );
}

export default App;

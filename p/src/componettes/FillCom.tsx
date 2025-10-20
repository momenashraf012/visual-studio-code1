import type { Ifile } from "../interface";

import RightArrowIcon from "./SVG/Right";

import BottomArrowIcon from "./SVG/Bottom";
import { useState } from "react";
import RenderfileIcon from "./RenderfileIcon";
interface Iprops {
  fileTree: Ifile;
}

const FillCom = ({ fileTree }: Iprops) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => setisOpen((prv) => !prv);
  return (
    <div className="ml-4">
      <div className="flex items-center gap-1 cursor-pointer " onClick={toggle}>
        {fileTree.isFolder ? (
          <div className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}

            <RenderfileIcon filename={fileTree.name} isOpen={isOpen} isFolder={fileTree.isFolder} />
                <span>{fileTree.name}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
           <RenderfileIcon filename={fileTree.name} />
              <span>{fileTree.name}</span>
              
            </div>
        
        )}
    
      </div>

      { isOpen && fileTree.children?.map((file, index) => (
        <FillCom fileTree={file} key={index} />
      ))}
    </div>
  );
};

export default FillCom;

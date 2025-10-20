import type { Ifile } from "../interface";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
import FolderIcon from "./SVG/Folder";
import BottomArrowIcon from "./SVG/Bottom";
import { useState } from "react";
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

            <FolderIcon />
          </div>
        ) : (
          <FileIcon />
        )}
        <span>{fileTree.name}</span>
      </div>

      { isOpen && fileTree.children?.map((file, index) => (
        <FillCom fileTree={file} key={index} />
      ))}
    </div>
  );
};

export default FillCom;

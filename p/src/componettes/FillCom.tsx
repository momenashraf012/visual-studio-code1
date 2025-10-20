import type { Ifile } from "../interface";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";
interface Iprops {
  fileTree: Ifile;
}

const FillCom = ({ fileTree }: Iprops) => {
  return (
    <div className="ml-4">
      <div className="flex items-center gap-1 ">
        <RightArrowIcon />
        <FileIcon />
        <span>{fileTree.name}</span>
      </div>

      {fileTree.children?.map((file, index) => (
        <FillCom fileTree={file} key={index} />
      ))}
    </div>
  );
};

export default FillCom;

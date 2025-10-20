import FileIcon from "./SVG/File"
import RightArrowIcon from "./SVG/Right"
interface Iprops{
    filename:string
}

const FillCom = ({filename}:Iprops) => {
  return (
   <div className=" flex items-center gap-1 p-2">
    < RightArrowIcon/>
      <FileIcon />
      <span>{filename}</span>
    </div>
  )
}

export default FillCom

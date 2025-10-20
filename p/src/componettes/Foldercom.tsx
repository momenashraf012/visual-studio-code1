import React from 'react'
import FolderIcon from './SVG/Folder'
import RightArrowIcon from './SVG/Right'
interface Iprops{
    foldername:string
}

function Foldercom({foldername}:Iprops) {
  return (
     <div className=" flex items-center gap-1 p-2">
    < RightArrowIcon/>

      <FolderIcon />
      <span>{foldername}</span>
    </div>



)
}

export default Foldercom
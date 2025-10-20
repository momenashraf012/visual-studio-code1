import IconImf from "./IconImf";
import FileIcon from "./SVG/File";

interface Iprops{
    filename:string
    isFolder?:boolean,
    isOpen?:boolean
}
const RenderfileIcon = ({filename,isFolder,isOpen}:Iprops) => {
    const extension=filename.split(".").pop();
    if(extension==="tsx")
        return <IconImf sru="/public/icons/react_ts.svg"/>
          if(extension==="js")
        return <IconImf sru="/public/icons/javascript.svg"/>

          if(extension==="node_modules" && isFolder)
            return isOpen ? <IconImf sru="/public/icons/folder-node-open.svg"/>:<IconImf sru="/public/icons/folder-node.svg"/>
        
             if(extension==="public" && isFolder)
            return isOpen ? <IconImf sru="/public/icons/folder-public-open.svg"/>:<IconImf sru="/public/icons/folder-public.svg"/>
        
             if(isFolder && isOpen  ) return <IconImf sru="/public/icons/folder-default-open.svg"/>
             if(isFolder && !isOpen  ) return <IconImf sru="/public/icons/folder-default.svg"/>

        
        
     
  return <FileIcon/>
   
 
}

export default RenderfileIcon

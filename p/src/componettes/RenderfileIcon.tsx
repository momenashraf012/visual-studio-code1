import IconImf from "./IconImf";
import FileIcon from "./SVG/File";

interface Iprops {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const extensionIconPaths: Record<string, string> = {
  // ** Files
  tsx: "/icons/react_ts",
  js: "/icons/javascript",
  jsx: "/icons/react",
  html: "/icons/html",

  //** Folders
  node_modules: "/icons/folder-node",
  public: "/icons/folder-public",
  src: "/icons/folder-src",
  components: "/icons/folder-components",
};

const RenderfileIcon = ({ filename, isFolder, isOpen }: Iprops) => {
  const extension = filename.split(".").pop();
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <IconImf sru={iconPath} />;
  }

  if (isFolder && isOpen)
    return <IconImf sru="/public/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen)
    return <IconImf sru="/public/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderfileIcon;

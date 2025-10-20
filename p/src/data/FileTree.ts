import type { Ifile } from "../interface";

export const fileTree: Ifile = {
  name: "node_modules",
  isFolder: true,
  children: [
    { name: "index.js", isFolder: false },
    {
      name: "public",
      isFolder: true,
      children: [{ name: "momen", isFolder: true,children:[{name:"React.tsx",isFolder:false}] }],
    },
    { name: "index.ts", isFolder: false },
  ],
};

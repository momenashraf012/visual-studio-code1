import type { Ifile } from "../interface";

export const fileTree: Ifile = {
  name: "momen-ashraf",
  isFolder: true,
  children: [
    { name: "index.ts", isFolder: false },
    {
      name: "public",
      isFolder: true,
      children: [{ name: "momen.html", isFolder: false }],
    },
    { name: "index.ts", isFolder: false },
  ],
};

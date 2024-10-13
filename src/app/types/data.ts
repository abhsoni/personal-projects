export interface FileItem {
  id: string;
  name: string;
  isFolder: boolean;
  items: FileItem[]; // A folder can have nested items (files or folders)
}
export type FileExplorer = FileItem;

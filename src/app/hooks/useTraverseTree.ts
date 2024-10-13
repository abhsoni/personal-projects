import { FileExplorer, FileItem } from "../types/data";
const useTraverseTree = () => {
  function insertNode(
    tree: FileExplorer,
    folderId: string,
    isFolder: boolean,
    itemName: string
  ) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime().toString(),
        name: itemName,
        items: [],
        isFolder,
      });
      return tree;
    }
    let subTree = [];
    subTree = tree.items.map((ob): FileExplorer => {
      return insertNode(ob, folderId, isFolder, itemName);
    });
    return { ...tree, items: subTree };
  }
  return { insertNode };
};
export default useTraverseTree;

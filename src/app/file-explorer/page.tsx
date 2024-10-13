import Image from "next/image";
import Folder from "../components/file-explorer/folder";
import explorer from "../lib/data";

export default function FileExplorer() {
  // const [explorerData,setExplorerData]=useState(explorer);
  return (
    <div className="flex">
      <Folder explorerData={explorer} />
    </div>
  );
}

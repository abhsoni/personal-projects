"use client";
import useTraverseTree from "@/app/hooks/useTraverseTree";
import { FileExplorer } from "@/app/types/data";
import Image from "next/image";
import React, { useState } from "react";
interface FolderProps {
  explorerData: FileExplorer;
}
export default function Folder({ explorerData }: FolderProps) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const { insertNode } = useTraverseTree();
  const handleAddFolderOrFile = (
    e: React.MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };
  const onAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
      insertNode(
        explorerData,
        explorerData.id,
        showInput.isFolder,
        (e.target as HTMLInputElement).value
      );
      setShowInput({
        visible: false,
        isFolder: false,
      });
    }
  };
  console.log(explorerData);
  return (
    <div className="flex flex-col m-4">
      {explorerData.isFolder ? (
        <>
          <div
            className="flex text-white border border-white p-1 w-72 justify-between"
            onClick={() => setExpand(!expand)}
          >
            <span>📁 {explorerData.name}</span>
            <div className="flex gap-2">
              <button
                className="border border-white px-1"
                onClick={(e) => handleAddFolderOrFile(e, true)}
              >
                Folder +
              </button>
              <button
                className="border border-white px-1"
                onClick={(e) => handleAddFolderOrFile(e, false)}
              >
                File +
              </button>
            </div>
          </div>
          {showInput.visible ? (
            <div className="flex my-2">
              {showInput.isFolder ? "📁 " : "📄 "}
              <input
                type="text"
                className="w-64 text-black"
                autoFocus
                onBlur={() => {
                  setShowInput({ ...showInput, visible: false });
                }}
                onKeyDown={onAddItem}
              />
            </div>
          ) : (
            <></>
          )}
          <div className={`${expand ? "block" : "hidden"} pl-6`}>
            {explorerData.items.map((item) => {
              return <Folder explorerData={item} />;
            })}
          </div>
        </>
      ) : (
        <div>📄 {explorerData.name}</div>
      )}
    </div>
  );
}

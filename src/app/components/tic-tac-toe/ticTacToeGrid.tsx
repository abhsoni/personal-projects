"use client";
import { useEffect, useState } from "react";

export default function TicTacToeGrid() {
  const [gridSize, setGridSize] = useState(3);
  const [gameArray, setGameArray] = useState<string[][]>([]);
  const [gameWinner, setGameWinner] = useState("");
  const [player, setPlayer] = useState("X");

  const handleCell = (rowIndex: number, colIndex: number) => {
    // Prevent further action if the cell is already filled or a winner is declared
    if (gameArray[rowIndex][colIndex] || gameWinner) return;

    // Update the gameArray with the current player's move
    const updatedGrid = gameArray.map((row, rIdx) =>
      row.map((cell, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? player : cell
      )
    );

    setGameArray(updatedGrid);

    // Check if the current player has won the game
    if (
      checkRow(rowIndex, player, updatedGrid) ||
      checkColumn(colIndex, player, updatedGrid) ||
      (rowIndex === colIndex && checkMainDiagonal(player, updatedGrid)) ||
      (rowIndex + colIndex === gridSize - 1 &&
        checkAntiDiagonal(player, updatedGrid))
    ) {
      setGameWinner(player);
      console.log(gameWinner);
    } else {
      // Switch to the next player
      setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }
  };

  // Check if all cells in a row belong to the same player
  const checkRow = (
    rowIndex: number,
    cellValue: string,
    grid: string[][]
  ): boolean => {
    return grid[rowIndex].every((cell) => cell === cellValue);
  };

  // Check if all cells in a column belong to the same player
  const checkColumn = (
    colIndex: number,
    cellValue: string,
    grid: string[][]
  ): boolean => {
    return grid.every((row) => row[colIndex] === cellValue);
  };

  // Check if all cells in the main diagonal belong to the same player
  const checkMainDiagonal = (cellValue: string, grid: string[][]): boolean => {
    return grid.every((row, idx) => row[idx] === cellValue);
  };

  // Check if all cells in the anti-diagonal belong to the same player
  const checkAntiDiagonal = (cellValue: string, grid: string[][]): boolean => {
    return grid.every((row, idx) => row[gridSize - 1 - idx] === cellValue);
  };

  // Initialize the game array whenever the grid size changes
  useEffect(() => {
    setGameArray(
      Array.from({ length: gridSize }, () => Array(gridSize).fill(""))
    );
    setGameWinner("");
    setPlayer("X");
  }, [gridSize]);

  return (
    <div className="flex flex-col items-center">
      {/* Grid Size Controls */}
      <div className="flex flex-row gap-4 justify-center m-8 items-center">
        <button
          className="cursor-pointer px-2 py-1 border border-white"
          onClick={() => setGridSize((prev) => Math.max(prev - 1, 3))}
        >
          -
        </button>
        <div>{gridSize}</div>
        <button
          className="cursor-pointer px-2 py-1 border border-white"
          onClick={() => setGridSize((prev) => Math.min(prev + 1, 7))}
        >
          +
        </button>
      </div>

      {/* Display the grid */}
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {gameArray.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex w-12 h-12 items-center justify-center border border-gray-400 cursor-pointer text-lg font-bold"
              onClick={() => handleCell(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))
        )}
      </div>

      {/* Player Turn and Game Status */}
      <div className="mt-4 text-lg">
        {gameWinner !== "" ? (
          <div>Congratulations! Player {gameWinner} won.</div>
        ) : (
          <div>
            Player {player === "X" ? 1 : 2}'s turn ({player})
          </div>
        )}
      </div>
    </div>
  );
}

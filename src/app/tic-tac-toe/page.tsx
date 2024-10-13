import TicTacToeGrid from "../components/tic-tac-toe/ticTacToeGrid";
export default function TicTacToe() {
  return (
    <div className="flex justify-center text-white items-center flex-col">
      <div className="text-2xl m-8">Tic Tac Toe</div>
      <TicTacToeGrid />
    </div>
  );
}

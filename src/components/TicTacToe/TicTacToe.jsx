import { useState } from "react";
import styles from "./TicTacToe.module.css";
import cross__icon from "@images/cross__icon.png";
import circle__icon from "@images/circle__icon.png";
import Header from "@components/header/Header";
import { ResetButton } from "@components/button/ResetButton";
import Message from "@components/mesaage/Message";
import { Board } from "@components/board/Board";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  // Showing Winner Icon;
  const winnerIcon = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Square handler;
  const squersHandler = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];

    newSquares[i] = isXTurn ? cross__icon : circle__icon;
    setSquares(newSquares);

    const newWinner = winnerIcon(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  // Start New game;
  const startNewGame = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <main>
        {/* ____Header */}
        <Header isXTurn={isXTurn} />

        {/*_____ Borad */}
        <Board squares={squares} squersHandler={squersHandler} />

        <footer>
          {/*_____Winner Message  */}
          <Message winner={winner} />

          {/*_____ Reset Button */}
          <ResetButton startNewGame={startNewGame} />
        </footer>
      </main>
    </div>
  );
}

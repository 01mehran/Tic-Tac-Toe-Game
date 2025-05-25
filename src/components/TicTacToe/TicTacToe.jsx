import { useState } from "react";
import styles from "./TicTacToe.module.css";
import cross__icon from "../../assets/cross__icon.png";
import circle__icon from "../../assets/circle__icon.png";
import Header from "../header/Header";
import { ResetButton } from "../button/ResetButton";
import Message from "../mesaage/Message";
import { Board } from "../board/Board";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
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

    newSquares[i] = isXNext ? cross__icon : circle__icon;
    setSquares(newSquares);

    const newWinner = winnerIcon(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Start New game;
  const startNewGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <main>
        {/* ____Header */}
        <Header isXNext={isXNext}/>

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

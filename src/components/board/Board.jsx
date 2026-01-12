import styles from "./Board.module.css";

export const Board = ({ squares, squersHandler }) => {
  return (
    <>
      <div className={styles.board}>
        {squares.map((square, i) => (
          <div
            className={styles.square}
            key={i}
            onClick={() => squersHandler(i)}
          >
            {square && <img src={square} alt="crossCircleicon" />}
          </div>
        ))}
      </div>
    </>
  );
};

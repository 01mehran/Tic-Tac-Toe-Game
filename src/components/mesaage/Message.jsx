import styles from "./message.module.css";
const Message = ({ winner }) => {
  return (
    <>
      {winner && (
        <span className={styles.msg}>
          Congratulation: <img src={winner} alt="icon" /> player win 👏🏼
        </span>
      )}
    </>
  );
};

export default Message;

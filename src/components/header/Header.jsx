import styles from "./Header.module.css";
import player__1 from "@images/Player 1.png";
import player__2 from "@images/Player 2.png";

const Header = ({ isXTurn }) => {
  return (
    <header>
      <section className={styles.playres}>
        <article>
          <img src={player__1} />
          <div className={`${isXTurn ? styles.active : ""}`}></div>
        </article>

        <article>
          <img src={player__2} />
          <div className={`${!isXTurn ? styles.active : ""}`}></div>
        </article>
      </section>
    </header>
  );
};

export default Header;

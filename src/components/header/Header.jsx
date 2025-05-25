import React from "react";
import styles from "./Header.module.css";
import player__1 from "../../assets/Player 1.png";
import player__2 from "../../assets/Player 2.png";

const Header = ({ isXNext }) => {
  return (
    <header>
      <section className={styles.playres}>
        <article>
          <img src={player__1} />
          <div className={`${isXNext ? styles.active : ""}`}></div>
        </article>

        <article>
          <img src={player__2} />
          <div className={`${!isXNext ? styles.active : ""}`}></div>
        </article>
      </section>
    </header>
  );
};

export default Header;

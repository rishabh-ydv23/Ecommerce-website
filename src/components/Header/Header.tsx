import styles from "./Header.module.scss"; // Styles

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1>Quick Kart</h1>
      </div>
      <div className={styles.bg}></div>
    </header>
  );
};

export default Header;

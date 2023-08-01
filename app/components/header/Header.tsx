import Link from "next/link";
import styles from "./Header.module.css";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerLogo}>
        <h1>ForestData</h1>
      </Link>
      <nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;

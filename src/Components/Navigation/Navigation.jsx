import { NavLink, Link } from "react-router";
import clsx from "clsx";
import css from "./Navigation.module.css";

import logo from "../../icons/Logo.svg";

const navLinkStyle = (props) => {
  return clsx(css.link, props.isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logoLink}>
        <img src={logo} alt="logo" />
      </Link>
      <ul className={css.navList}>
        <li>
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={navLinkStyle}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

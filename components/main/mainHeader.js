import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import NavLink from "../generics/navLink";
import classes from "./mainHeader.module.scss";
export default function MainHeader() {
  return (
    <header className={classes["header"]}>
      <Link href="/">
        <Image
          className={classes["header-logo"]}
          src={logo}
          alt="Expense Tracking App Logo"
        />
      </Link>
      <nav className={classes["header-nav"]}>
        <ul className={classes["header-nav-list"]}>
          <NavLink className={classes["header-nav-link"]} href="/expenses">
            Expenses
          </NavLink>
          <NavLink className={classes["header-nav-link"]} href="/analytics">
            Analytics
          </NavLink>
          <NavLink className={classes["header-nav-link"]} href="/setConfig">
            Settings
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

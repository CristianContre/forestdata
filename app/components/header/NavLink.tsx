"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();
  return (
    <Link href={href}>
      <span
        className={`${styles.navLink}${
          path === href ? ` ${styles.activeLink}` : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;

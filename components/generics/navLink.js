import Link from "next/link";

export default function NavLink({ children, className, href }) {
  return (
    <li className={className}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { ReactNode } from "react";

interface NavLinkCompatProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children: ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, href, children }, ref) => (
    <Link ref={ref} href={href} className={className}>
      {children}
    </Link>
  ),
);

NavLink.displayName = "NavLink";

export { NavLink };

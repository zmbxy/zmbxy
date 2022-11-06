import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef, ReactNode } from 'react';
import { UrlObject } from 'url';

interface NavItemProps {
  children?: ReactNode;
  href: string | UrlObject;
  isActive?: boolean;
}

const NavItem = forwardRef<any, NavItemProps>(({ children, href, isActive }, ref) => {
  return (
    <li ref={ref}>
      <Link href={href}>
        <a
          className={clsx('block border-l pl-4 -ml-px', {
            'text-sky-500 border-current font-semibold dark:text-sky-400': isActive,
            'border-transparent hover:border-slate-400 dark:hover:border-slate-500': !isActive,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  );
});

NavItem.displayName = 'NavItem';

export default NavItem;

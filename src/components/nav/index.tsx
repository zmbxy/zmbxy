import clsx from 'clsx';
import { useRef } from 'react';
import SearchButton from '../SearchButton';
import NavItem from './NavItem';

function Nav() {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <nav ref={scrollRef} id="nav" className="lg:text-sm lg:leading-6 relative">
      <div className="sticky top-0 -ml-0.5 pointer-events-none">
        <div className="h-10 bg-white dark:bg-slate-900" />
        <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
          <SearchButton>
            {({ actionKey }) => (
              <>
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                  <path
                    d="m19 19-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>快速检索...</span>
                <span className="ml-auto pl-3 flex-none text-xs font-semibold">{actionKey[0]}K</span>
              </>
            )}
          </SearchButton>
        </div>
      </div>
      <ul>
        <li className="mt-12 lg:mt-8">
          <h5
            className={clsx('mb-8 lg:mb-3 font-semibold', {
              'text-slate-900 dark:text-slate-200': true,
              // 'text-slate-900 dark:text-slate-200': publishedItems.length > 0,
              // 'text-slate-400': publishedItems.length === 0,
            })}
          >
            HTML
          </h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100">
            <NavItem href="/aa">JavaScript</NavItem>
            <NavItem href="/bb">React</NavItem>
            <NavItem href="/cc">HTML</NavItem>
            <NavItem href="/dd">CSS</NavItem>
            <NavItem href="/ee">webpack</NavItem>
          </ul>
        </li>
        <li className="mt-12 lg:mt-8">
          <h5
            className={clsx('mb-8 lg:mb-3 font-semibold', {
              'text-slate-900 dark:text-slate-200': true,
              // 'text-slate-900 dark:text-slate-200': publishedItems.length > 0,
              // 'text-slate-400': publishedItems.length === 0,
            })}
          >
            CSS
          </h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100">
            <NavItem href="/aa">JavaScript</NavItem>
            <NavItem href="/bb">React</NavItem>
            <NavItem href="/cc">HTML</NavItem>
            <NavItem href="/dd">CSS</NavItem>
            <NavItem href="/ee">webpack</NavItem>
          </ul>
        </li>
        <li className="mt-12 lg:mt-8">
          <h5
            className={clsx('mb-8 lg:mb-3 font-semibold', {
              'text-slate-900 dark:text-slate-200': true,
              // 'text-slate-900 dark:text-slate-200': publishedItems.length > 0,
              // 'text-slate-400': publishedItems.length === 0,
            })}
          >
            JavaScript
          </h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-slate-100">
            <NavItem href="/aa">JavaScript</NavItem>
            <NavItem href="/bb">React</NavItem>
            <NavItem href="/cc">HTML</NavItem>
            <NavItem href="/dd">CSS</NavItem>
            <NavItem href="/ee">webpack</NavItem>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

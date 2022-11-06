import Link from 'next/link';

function NavItems() {
  return (
    <>
      <li>
        <Link href="/notes">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">笔记</a>
        </Link>
      </li>
      <li>
        <Link href="/code">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">代码</a>
        </Link>
      </li>
      <li>
        <Link href="/essay">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">随笔</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">关于我</a>
        </Link>
      </li>
    </>
  );
}

export default NavItems;

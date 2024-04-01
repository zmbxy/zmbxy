import Link from 'next/link';

function NavItems() {
  return (
    <>
      <li>
        <Link href="/notes" className="hover:text-sky-500 dark:hover:text-sky-400">
          笔记
        </Link>
      </li>
      <li>
        <Link href="/code" className="hover:text-sky-500 dark:hover:text-sky-400">
          代码
        </Link>
      </li>
      <li>
        <Link href="/essay" className="hover:text-sky-500 dark:hover:text-sky-400">
          随笔
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-sky-500 dark:hover:text-sky-400">
          关于我
        </Link>
      </li>
    </>
  );
}

export default NavItems;

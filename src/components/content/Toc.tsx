import clsx from 'clsx';

function Toc() {
  return (
    <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
      <div className="px-8">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">目录索引</h5>
        <ul className="text-slate-700 text-sm leading-6">
          <li>
            <a className="block py-1 font-medium text-sky-500 dark:text-sky-400">前言</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Toc;

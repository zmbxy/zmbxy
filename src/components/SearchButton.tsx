import { ReactNode } from 'react';
import { useActionKey } from '../hooks/useActionKey';

interface ChildFnProps {
  actionKey: string[];
}

interface SearchButtonProps {
  children?: ReactNode | ((props: ChildFnProps) => ReactNode);
}

function SearchButton({ children, ...props }: SearchButtonProps) {
  const actionKey = useActionKey();

  return (
    <button
      type="button"
      className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
    >
      {typeof children === 'function' ? children({ actionKey }) : children}
    </button>
  );
}

export default SearchButton;

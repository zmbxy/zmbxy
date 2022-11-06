import { ReactNode } from 'react';

interface WrapperProps {
  allowOverflow?: boolean;
  children?: ReactNode;
}

function Wrapper({ allowOverflow, children }: WrapperProps) {
  return (
    <div className={allowOverflow ? undefined : 'overflow-hidden'}>
      {children}
    </div>
  );
}

export default Wrapper;

import { ReactNode } from 'react';
import PageContent from './content/PageContent';
import Nav from './nav';
import Wrapper from './Wrapper';

interface SiderbarLayoutProps {
  children?: ReactNode;
}

function SiderbarLayout({ children }: SiderbarLayoutProps) {
  return (
    <Wrapper allowOverflow={true}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
          <Nav />
        </div>
        <div className="lg:pl-[19.5rem]">
          {children}
          <PageContent />
        </div>
      </div>
    </Wrapper>
  );
}

export default SiderbarLayout;

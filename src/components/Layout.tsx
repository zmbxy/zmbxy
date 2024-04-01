import Header from './header/Header';
import Nav from './nav';
import SiderbarLayout from './SiderbarLayout';
import { leftNavItems } from "../route.config";

function Layout() {
  return (
    <>
      <Header/>
      <SiderbarLayout siderItems={leftNavItems}/>
    </>
  );
}

export default Layout;

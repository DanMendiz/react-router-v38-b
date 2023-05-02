import React from 'react';
import SiteNav from './SiteNav';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="page-header">
      <h1>Title</h1>
        <SiteNav/>
      </header>
      <main>
      <Outlet/>
      </main>
    </>
  );
}

export default Layout;
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <>
      <Header />
      <main className='h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

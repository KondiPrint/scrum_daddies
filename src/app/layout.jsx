import { Inter } from 'next/font/google';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SCRUM-Daddies',
  description: 'Hjemmeside for vores Scrum-projekt',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='min-h-dvh scroll-smooth'>
      <body className={inter.className + ' ' + 'min-h-dvh flex flex-col'}>
        <Header />
        <section className='container mx-auto h-full flex-grow'>
          <main className='py-8 px-2 mx-auto md:px-4 min-h-full'>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}

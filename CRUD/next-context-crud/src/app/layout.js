import { Navbar } from '@/components/Navbar';
import { TaskProvider } from '@/context/TasksContext';
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    /** the suppressHydration... is  so that it doesn't show this error in console: app-index.js:32 Warning: Extra attributes from the server: class
    at html
    at RedirectErrorBoundary */
    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className}>
        <TaskProvider>
          <Navbar />
          {children}
        </TaskProvider>
        {/* {children} */}
      </body>
    </html>
  );
}

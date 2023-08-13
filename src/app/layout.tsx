import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SSRProvider from 'react-bootstrap/SSRProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jspotx',
  description: 'Job board with spotlight feature',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SSRProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SSRProvider>
  );
}

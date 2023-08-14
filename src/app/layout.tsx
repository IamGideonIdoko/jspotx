import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { /* Inter, */ Nunito } from 'next/font/google';
import SSRProvider from 'react-bootstrap/SSRProvider';
import CustomNavbar from '@/components/CustomNavbar';

// const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jspotx',
  description: 'Job board with spotlight feature',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SSRProvider>
      <html lang="en">
        <body className={nunito.className}>
          <CustomNavbar />
          {children}
        </body>
      </html>
    </SSRProvider>
  );
}

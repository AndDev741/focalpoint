import "./globals.css";
import { Inter_Tight } from 'next/font/google';

const inter = Inter_Tight({subsets: ['latin']});

export const metadata = {
  title: "FocalPoint",
  description: "Your todo list",
};

export default function RootLayout({children}) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

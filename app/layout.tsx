import './globals.css';
import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer/footer';

//const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Modern Utilities',
    template: '%s | Modern Utilities',
  },
  description: 'A collection of modern web utilities for developers',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-background flex flex-col">
            <Navigation />
            <main className="container mx-auto px-4 py-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
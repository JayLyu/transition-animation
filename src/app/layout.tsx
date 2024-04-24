import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transition Animation",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <Link href={"/"} className="nav">
            <nav >BaiKKK</nav>
          </Link>
          <section className="container">{children}</section>
        </main>
      </body>
    </html>
  );
}

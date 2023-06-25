import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export function RootLayout({ children }) {
  return (
    <div lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <main className="min-h-screen items-center justify-between p-24 grid grid-cols-4">
        <Sidebar />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex col-span-3 bg-cyan-100 min-h-full rounded-xl">
          {children}
        </div>
      </main>
    </div>
  );
}

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeFormater.xyz",
  description: "Simple dev tools for every day formatting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className={"flex flex-row justify-between p-8"}>
            <h1 className={`font-bold text-xl`}>
                CodeFormater.xyz
            </h1>
            <ul className={`flex flex-row space-x-4`}>
                {/*<li>*/}
                {/*    Tools*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    Premium*/}
                {/*</li>*/}
            </ul>
        </section>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}

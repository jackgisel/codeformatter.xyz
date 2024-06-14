import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Image from "next/image";

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
          <div className="flex flex-row items-center">
            <Image
              src="/icon.png"
              height={40}
              width={40}
              alt="CodeFormatter logo"
              className="m-2"
            />
            <h1 className={`font-bold text-xl`}>CodeFormatter.xyz</h1>
          </div>
        </section>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

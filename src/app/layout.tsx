import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srt Bucket List",
  description: "Srt Learning Next Js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bucketlist-container">
        {children}
      </body>
    </html>
  );
}

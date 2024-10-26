import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Wedding of Tiffany & Jared by Invitato",
    description:
        "Together with joyful hearts, we re pleased to announce the beginning of this new chapter of our lives together. Please click the Website Invitation link on this message for more information about our wedding details.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning>
            <body className={newsreader.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}

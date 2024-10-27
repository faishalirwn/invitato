import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "@/components/ui/provider";
import { Newsreader, Poppins } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["300", "400"],
    variable: "--font-newsreader",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-poppins",
});

const butler = localFont({
    src: [
        {
            path: "../public/Butler_Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/Butler_Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-butler",
});

export const metadata: Metadata = {
    title: "The Wedding of Tiffany & Jared by Invitato",
    description:
        "Together with joyful hearts, we're pleased to announce the beginning of this new chapter of our lives together. Please click the Website Invitation link on this message for more information about our wedding details.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            className={`${newsreader.variable} ${poppins.variable} ${butler.variable}`}
        >
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}

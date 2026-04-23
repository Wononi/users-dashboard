import {QueryProvider} from "@/providers/QueryProvider";
import type {ReactNode} from "react";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>
                    <div className="min-h-screen">
                        <header className="border-b bg-white">
                            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
                                <span className="font-semibold">
                                    Users Dashboard
                                </span>
                            </div>
                        </header>
                        <main className="max-w-6xl mx-auto px-6 py-6">
                            {children}
                        </main>
                    </div>
                </QueryProvider>
            </body>
        </html>
    );
}
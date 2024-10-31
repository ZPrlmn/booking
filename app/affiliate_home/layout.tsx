import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Booking | Affiliate Home",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-gray-100">
            {/* Top Navigation Bar */}
            <div className="bg-blue-600 text-white py-4 px-6 shadow-md">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <h1 className="text-xl font-bold">Affiliate Home</h1>
                    <nav className="flex space-x-6">
                        <Link href="/affiliate_home">
                            <span className="hover:text-gray-200 transition">Home</span>
                        </Link>
                        <Link href="/affiliate_home/message">
                            <span className="hover:text-gray-200 transition">Messages</span>
                        </Link>
                        <Link href="/affiliate_home/requests">
                            <span className="hover:text-gray-200 transition">Requests</span>
                        </Link>
                        <Link href="/" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition">
                            <span>Log Out</span>
                        </Link>
                    </nav>
                </div>
            </div>

            <main className="p-6 max-w-6xl mx-auto">
                {children}
            </main>
        </section>
    );
}

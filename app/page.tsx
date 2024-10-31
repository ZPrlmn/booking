import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Our Service</h1>
      <div className="space-x-4">
        <Link href="/login_user">
          <span className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Login
          </span>
        </Link>
        <Link href="/affiliate">
          <span className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Affiliate
          </span>
        </Link>
      </div>
    </div>
  );
}

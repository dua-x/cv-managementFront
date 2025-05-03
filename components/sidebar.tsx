import Link from 'next/link';
import { Home, FileText } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden sm:block">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">Admin Panel</h2>
      <nav className="space-y-4">
        <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <Home className="w-5 h-5" /> Accueil
        </Link>
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
          <FileText className="w-5 h-5" /> Dashboard
        </Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
}

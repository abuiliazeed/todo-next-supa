import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to TaskMaster</h1>
        <p className="mb-4">Manage your tasks efficiently with TaskMaster.</p>
        <div>
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Login
          </Link>
          <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}

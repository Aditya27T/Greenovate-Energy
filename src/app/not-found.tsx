import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-16">
      <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for doesnt exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="bg-primary hover:bg-secondary text-white font-medium py-3 px-8 rounded-md transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
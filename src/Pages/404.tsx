import { ConstructionIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; // Change this!

export default function Error() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-colors-primary px-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-amber-100 rounded-full text-amber-600 animate-pulse">
            <ConstructionIcon size={48} />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-color-primary">404 - Not Found</h1>
          <p className="text-color-primary">The page you're looking for doesn't exist.</p>
        </div>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          <ArrowLeft size={18} />
          Back Home
        </Link>
      </div>
    </main>
  );
}
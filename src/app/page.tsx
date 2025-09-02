export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-fade-in">
            Hello World!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to your simple Hello World application
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            🎉 Success!
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your Next.js application is running perfectly. This is a clean, modern Hello World page built with Tailwind CSS and ready for your next amazing project.
          </p>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Built with Next.js 🚀
        </div>
      </div>
    </div>
  );
}
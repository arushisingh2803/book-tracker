import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-200 font-mono">
      {/* Fixed heading */}
      <div className="w-full fixed top-0 bg-orange-200 z-10 flex justify-center items-center p-4">
        <div className="max-w-3xl w-full flex justify-center">
          <h1 className="text-4xl text-center p-5 text-amber-950">pantry tracker</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full flex justify-center mt-32 px-4 md:px-8 pb-10">
        <form className="w-full md:w-1/2 flex">
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-grow p-2 border border-gray-300 rounded-l-md shadow-sm text-gray-800"
          />
          <button
            type="submit"
            className="bg-amber-800 text-white p-2 rounded-r-md shadow-md">Search</button>
        </form>
      </div>

      {/* Main content */}
      <div className="flex-grow flex flex-col items-center mt-4 px-4 md:px-8">
        <div className="bg-white w-full max-w-6xl h-96 flex flex-col items-center shadow-md p-5">
          <p className="text-center mb-4 text-amber-950">your pantry</p>
          <div className="bg-orange-100 w-full h-full flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-200 text-center py-4 border-t border-amber-950">
        <p className="text-amber-950 text-sm">
          &copy; {new Date().getFullYear()} Arushi Singh. All rights reserved.
        </p>
        <p className="text-amber-950 text-xs mt-1">Made with love and (NextJS, Firebase and Tailwind CSS)</p>
      </footer>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-200 font-mono">
      {/* Fixed heading */}
      <div className="w-full fixed top-0 bg-orange-200 z-10 flex justify-center items-center p-4">
        <div className="max-w-3xl w-full flex justify-center">
          <h1 className="text-4xl text-center p-5">book tracker</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full flex justify-center mt-32 px-4 md:px-8">
        <input 
          type="text" 
          placeholder="Search for books..." 
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md shadow-sm text-gray-800"
        />
      </div>

      {/* Content below the search bar */}
      <div className="w-full flex-grow flex flex-col items-center mt-4 px-4 md:px-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
        {/* Three adjacent white containers */}
        <div className="bg-white w-full md:w-1/3 h-96 flex flex-col items-center shadow-md p-4">
          <p className="text-center mb-4 text-amber-950">to read</p>
          <div className="bg-orange-100 w-full h-full flex items-center justify-center">
            {/* Content inside the box can be added here */}
          </div>
        </div>
        <div className="bg-white w-full md:w-1/3 h-96 flex flex-col items-center shadow-md p-4">
          <p className="text-center mb-4 text-amber-950">reading</p>
          <div className="bg-orange-100 w-full h-full flex items-center justify-center">
            {/* Content inside the box can be added here */}
          </div>
        </div>
        <div className="bg-white w-full md:w-1/3 h-96 flex flex-col items-center shadow-md p-4">
          <p className="text-center mb-4 text-amber-950">read</p>
          <div className="bg-orange-100 w-full h-full flex items-center justify-center">
            {/* Content inside the box can be added here */}
          </div>
        </div>
      </div>
      <footer className="bg-orange-200 text-center py-4 border-t border-amber-950">
      <p className="text-gray-800 text-sm">
        &copy; {new Date().getFullYear()} Arushi Singh. All rights reserved.
      </p>
      <p className="text-gray-600 text-xs mt-1">Made with love and Tailwind CSS</p>
    </footer>
    </div>  
    
  );
}

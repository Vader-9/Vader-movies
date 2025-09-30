import { useState } from "react";
import { Film, Menu, X } from "lucide-react";

function Sidebar({ setSeries, setShowWatchList }) {
  const [isOpen, setIsOpen] = useState(false);

  // Your original functions (untouched)
  function allMovies() {
    setSeries(false);
    setShowWatchList(false);
  }

  function allSeries() {
    setSeries(true);
    setShowWatchList(false);
  }

  function allWatch() {
    setSeries(false);
    setShowWatchList(true);
  }

  // Helper: run action + close sidebar on mobile
  const handleClick = (callback) => {
    callback();
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button (Mobile only) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-yellow-400 hover:bg-gray-800 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen w-[70%] sm:w-[50%] lg:w-[20%] 
        bg-gray-900 text-white shadow-lg flex flex-col p-4 lg:p-6 transform 
        transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40`}
      >
        {/* App Title */}
        <h1 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-yellow-400 text-center lg:text-left">
          Vader-Movies
        </h1>

        {/* Section label (hidden on small screens) */}
        <p className="hidden lg:block uppercase text-gray-400 text-sm mb-6 tracking-wider">
          Browse
        </p>

        {/* Nav Items */}
        <div className="flex lg:flex-col justify-around lg:justify-start space-y-0 lg:space-y-4">
          <div
            onClick={() => handleClick(allMovies)}
            className="flex items-center gap-2 lg:gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <Film className="w-5 h-5 text-yellow-400" />
            <p className="font-medium hidden sm:block">All Films</p>
          </div>

          <div
            onClick={() => handleClick(allSeries)}
            className="flex items-center gap-2 lg:gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <span className="w-5 h-5 flex items-center justify-center text-yellow-400">🎬</span>
            <p className="font-medium hidden sm:block">Series</p>
          </div>

          <div
            onClick={() => handleClick(allWatch)}
            className="flex items-center gap-2 lg:gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <span className="w-5 h-5 flex items-center justify-center text-yellow-400">⭐</span>
            <p className="font-medium hidden sm:block">My Watchlist</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
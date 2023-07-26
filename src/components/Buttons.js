import React from 'react';
const Buttons = ({ handleSearch, handleFilter }) => {
  return (
    <div className="flex flex-col  mt-4 px-4">
      {/* Search bar */}
      <div className="w-full md:w-96 bg-white dark:bg-slate-800  dark:text-white justify-between rounded-md shadow-md px-4 py-2 mb-4">
        <input
          type="text"
          placeholder="Search Events..."
          className="w-full bg-transparent outline-none"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className='flex justify-center space-x-4'>
      <button
        className="px-4 py-2 rounded-md bg-blue-50 dark:bg-slate-800  dark:text-white dark:hover:bg-blue-700 transition-transform transform hover:scale-110 hover:bg-blue-700 duration-300 text-black mb-2"
        onClick={() => handleFilter('popular')}
      >
        Popular
      </button>
      <button
        className="px-4 py-2 rounded-md bg-blue-50 dark:bg-slate-800  dark:text-white dark:hover:bg-blue-700 transition-transform transform hover:scale-110 hover:bg-blue-700 duration-300 text-black mb-2"
        onClick={() => handleFilter('recent')}
      >
        Recent
      </button>
      <button
        className="px-4 py-2 rounded-md bg-blue-50 dark:bg-slate-800  dark:text-white dark:hover:bg-blue-700 transition-transform transform hover:scale-110 hover:bg-blue-700 duration-300 text-black mb-2"
        onClick={() => handleFilter('eventDeadline')}
      >
        Event Deadline
      </button>
      </div>
    </div>
  );
};

export default Buttons;
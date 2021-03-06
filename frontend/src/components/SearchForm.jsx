import React, { useState } from "react";

const SearchForm = () => {
  const [Name, setName] = useState("");
  return (
    <div className="px-6 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <div className="flex items-baseline mt-4 mb-6">
        <div className="space-x-2 flex">
          <div className="radio rounded-lg">
            <input
              className="bg-indigo-300 w-9 h-9 flex items-center justify-center rounded-lg"
              name="size"
              type="radio"
              value="xs"
            />
            <label>A</label>
          </div>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center rounded-lg "
              name="size"
              type="radio"
              value="s"
            />
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="m"
            />
          </label>
          <label>
            <input
              className="w-9 h-9 flex items-center justify-center"
              name="size"
              type="radio"
              value="l"
            />
          </label>
        </div>
      </div>
      <form className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Filter projects"
          placeholder="Filter projects"
        />
      </form>
    </div>
  );
};

export default SearchForm;

import React from 'react'

export default function searchbar() {
  return (
    <div className="flex items-center h-full m-1 mr-3">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 h-8"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-pink-400 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
  )
}

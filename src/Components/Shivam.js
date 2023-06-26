import React from 'react';

export default function Shivam({ image }) {
  const tags = image.tags.split(',');
  const handleButtonClick = () => {
    window.location.href = image.pageURL;
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={image.webformatURL}
          alt="Image"
          className="hover:scale-95 transition-all duration-300"
        />
        <div className="text-left px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>views: </strong>
              {image.views}
            </li>
            <li>
              <strong>downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>likes: </strong>
              {image.likes}
            </li>
            <li>
              <button
                onClick={handleButtonClick}
                className="bg-blue-400 mt-3 rounded-full px-2 text-white hover:bg-blue-200 hover:text-black"
              >
                View Details
              </button>
            </li>
          </ul>
        </div>
        <div className="text-left pb-1 space-x-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 flex px-3 py-0 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

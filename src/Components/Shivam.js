import React from 'react'

export default function Shivam({image}) {
    const tags = image.tags.split(',');
  return (
    <div>
        <div className="App">
      <div className='max-w-sm rounded overflow-hiden shadow-lg'>
        <img src={image.webformatURL} alt="Image" className="w-full"/>
        <div className=" text-left px-6 py-4">
          <div className=" font-bold text-purple-500 text-xl mb-2">
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
      </ul>
        </div>
        <div className='text-left py-4 space-x-3'>
          {tags.map((tag,index) => (
            <span key={index} className= 'bg-gray-200 flex px-3 py-0 rounded-full'>#{tag}</span>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  )
}

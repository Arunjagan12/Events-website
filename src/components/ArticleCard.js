import React from 'react';
import clockIcon from '../assets/img/clock.png';
import locationIcon from '../assets/img/location.png';
import calenderIcon from '../assets/img/calender.png';
const ArticleCard = ({ article, onClick }) => {
  return (
    <div
      data-aos="fade-right"
      className="bg-white p-4 hover:bg-blue-700 rounded-md shadow-md cursor-pointer mb-4 bg-blue-50 dark:bg-slate-800 dark:text-white dark:hover:bg-blue-700 "
      onClick={() => onClick(article)}
    >
      <h2 className="text-lg font-serif font-semibold mb-2">{article.name}</h2>

      <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
        {/* Location with location symbol */}
        <div className="flex items-center space-x-1">
        <img src={locationIcon} alt="Location" className="h-4 w-4" />
            <span className='font-semibold font-mono'>{article.location}</span>
        </div>


        <div className="flex items-center space-x-1">
        <img src={calenderIcon} alt="calender" className="h-4 w-4" />
          <span className='font-semibold font-mono'>{article.date}</span>
        </div>

        <div className="flex items-center space-x-1">
        <img src={clockIcon} alt="time" className="h-4 w-4" />
          <span className='font-semibold font-mono'>{article.time} {article.timezone}</span>
        </div>
      </div>

      <div className="flex items-end justify-between mt-4">
      <>
        <img
          src={article.PublisherPic}
          alt="Publisher"
          className="h-8 w-8 rounded-full mr-2"
        />
        <span className="text-sm text-black font-semibold font-mono dark:text-white">{article.PublisherName}</span>
        </>
        <div className="mt-2  text-gray-600 font-semibold  font-mono dark:text-gray-400">
      
        <img src={clockIcon} alt="Duration" className="h-4 w-4 inline mr-1" />
        {article.duration}

      </div>
      </div>

      
     
    </div>
  );
};

export default ArticleCard;
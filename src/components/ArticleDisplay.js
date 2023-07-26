import React, {useState} from 'react';
import clockIcon from '../assets/img/clock.png';
import locationIcon from '../assets/img/location.png';
import calenderIcon from '../assets/img/calender.png';
import languageIcon from '../assets/img/language.png';
import feeIcon from '../assets/img/fee.jpg';
import speakerIcon from '../assets/img/speaker.png';



const ArticleDisplay = ({ article }) => {
  const [activeDay, setActiveDay] = useState('day1');
  const keywords = article.keywords.map((keyword, index) => (
    <span
      key={index}
      className="inline-block bg-gray-500 text-white px-2 py-1 rounded-md text-sm mr-2 mb-2"
    >
      #{keyword}
    </span>
  ));

  const bulletPoints = article.bulletPoints.map((point, index) => (
    <li key={index} className="list-disc font-serif ml-6 mb-2">
      {point}.
    </li>
  ));
  const handleDayClick = (day) => {
    setActiveDay(day);
  };
  const renderTableRows = () => {
    switch (activeDay) {
      case 'day1':
        return article.day1.map((session, index) => (
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
            <td className="px-6 py-4">{session.time}</td>
            <td className="px-6 py-4">{session.context}</td>
            <td className="px-6 py-4">
              {session.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center">
                  <img src={speaker.image} alt={speaker.name} className="h-6 w-6 rounded-full mr-2" />
                  {speaker.name}
                </div>
              ))}
            </td>
          </tr>
        ));
      case 'day2':
        return article.day2.map((session, index) => (
          <tr  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
            <td className="px-6 py-4">{session.time}</td>
            <td className="px-6 py-4">{session.context}</td>
            <td className="px-6 py-4">
              {session.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center">
                  <img src={speaker.image} alt={speaker.name} className="h-6 w-6 rounded-full mr-2" />
                  {speaker.name}
                </div>
              ))}
            </td>
          </tr>
        ));
      case 'day3':
        return article.day3.map((session, index) => (
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={index}>
            <td className="px-6 py-4">{session.time}</td>
            <td className="px-6 py-4">{session.context}</td>
            <td className="px-6 py-4">
              {session.speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center">
                  <img src={speaker.image} alt={speaker.name} className="h-6 w-6 rounded-full mr-2" />
                  {speaker.name}
                </div>
              ))}
            </td>
          </tr>
        ));
      default:
        return null;
    }
  };
  
  const descriptionParagraphs = article.description.split('\n').map((paragraph, index) => (
    <p key={index} className="font-serif">
      {paragraph}
    </p>
  ));

  return (
    <div data-aos='fade-down' className="bg-slate-50 p-4 rounded-md dark:bg-slate-900 dark:text-white shadow-md ">
      <h2 className="text-2xl font-bold underline mb-4">{article.name}</h2>
      <br />
      <img src={article.Image} alt={article.name} className="w-full h-full object-cover mb-4 rounded-md" />
      <br />
      <div className="flex flex-wrap font-semibold mb-4">{keywords}</div>
      <br />
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mb-4">
        <div className="flex space-x-2 items-center">
          <img
            src={clockIcon}
            alt="Location"
            className="h-4 w-4"
          />
          <span className='font-semibold'>{article.date} {article.time}</span>
          <img
            src={calenderIcon}
            alt="Location"
            className="h-4 w-4"
          />
          <span className='font-semibold'>{article.mode}</span>
          <img
            src={speakerIcon}
            alt="speaker"
            className="h-4 w-4"
          />
          <span className='font-semibold'>{article.speaker}</span>
        </div>

        
        <div className="flex space-x-2 items-center">
          <img
            src={locationIcon}
            alt="Location"
            className="h-4 w-4"
          />
          <span className='font-semibold'>{article.location}</span>
          <img
            src={languageIcon}
            alt="Language"
            className="h-4 w-4"
          />
          <span className='font-semibold'>{article.language}</span>
          <img src={feeIcon} alt="Fee" className="h-4 w-4" />
          <span className='font-semibold'>{article.fee}</span>
        </div>
        </div>
        <br />
        <div className="flex justify-center">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-transform transform hover:scale-110">
          Register Event
        </button>
      </div>
      <br />
      <div className="font-serif">{descriptionParagraphs}</div>
      <br />
      <p className="font-serif font-semibold"> At the end of this course, you'll be able to:</p>
      <br />
      <ul className="list-inside">{bulletPoints}</ul>
      <br />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={article.logo}
            alt={article.university}
            className="h-16 w-16 mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{article.university}</h3>
            <p>{article.branch}</p>
          </div>
        </div>

        <button className="px-6 py-2 bg-blue-500 text-white transition-transform transform hover:scale-110 rounded-md hover:bg-blue-700">
          Follow
        </button>
      </div>
      <br />
      <h3 className="text-xl font-semibold mt-6">Event Schedule</h3>
      <div className="flex space-x-10 mt-4">
        <div className={`cursor-pointer ${activeDay === 'day1' ? 'underline font-semibold' : ''} inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-700 dark:hover:text-gray-300`} onClick={() => handleDayClick('day1')}>
          Day 1
        </div>
        <div className={`cursor-pointer ${activeDay === 'day2' ? 'underline font-semibold' : ''} inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-700 dark:hover:text-gray-300`} onClick={() => handleDayClick('day2')}>
          Day 2
        </div>
        <div className={`cursor-pointer ${activeDay === 'day3' ? 'underline font-semibold' : ''} inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-700 dark:hover:text-gray-300`} onClick={() => handleDayClick('day3')}>
          Day 3
        </div>
      </div>
      <br />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th>Time</th>
            <th>Context</th>
            <th>Speakers</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
        

    </div>
  );
};

export default ArticleDisplay;
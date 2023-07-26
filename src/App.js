import React, { useState } from 'react';
import Navbar from './components/navbar';
import ArticleCard from './components/ArticleCard';
import { articles } from './articles/article';
import ArticleDisplay from './components/ArticleDisplay';
import Buttons from './components/Buttons';

const App = () => {
  const [currentArticle, setCurrentArticle] = useState(articles[0]); // Set the first article initially
  

  // Define the click handler function
  const handleArticleClick = (article) => {
    setCurrentArticle(article);
  };

  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
  };
  const handleFilter = (filterCategory) => {
    console.log('Selected Filter:', filterCategory);
  };
  return (
    <div>
        <Navbar/>
        <Buttons handleSearch={handleSearch} handleFilter={handleFilter} />
        <div className="flex justify-between mt-8 gap-4">
        <div className="grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} onClick={handleArticleClick} />
        ))}
      </div>
      <div className='w-full md:w-2/3'>
        <ArticleDisplay article={currentArticle} />
      </div>
    </div>
    </div>
  )
}

export default App;

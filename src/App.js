/*
import { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Rooute,
  Route,
  Routes,
} from 'react-router-dom';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
*/

import { useState, useCallback } from 'react';
import MovieList from './components/MovieList';
import Genres from './components/Genres';

const App = () => {
  const [genre, setGenre] = useState('all');
  const onSelect = useCallback((genre) => setGenre(genre), []);
  return (
    <>
      <Genres genre={genre} onSelect={onSelect} />
      <MovieList genre={genre} />
    </>
  );
};
export default App;

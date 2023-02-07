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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:genre?" element={<MoviePage />} />
      </Routes>
    </Router>
  );
};
export default App;

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
/*
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
*/

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

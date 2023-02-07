import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import MoviePage from './pages/MoviePage';
import MainPage from './pages/MainPage';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:category?" element={<NewsPage />} />
          <Route path="/:genre?" element={<MoviePage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

/*
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
*/

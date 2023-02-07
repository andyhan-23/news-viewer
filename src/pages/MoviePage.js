import { useParams } from 'react-router-dom';
import Genres from '../components/Genres';
import MovieList from '../components/MovieList';

const MoviePage = () => {
  const genre = useParams().genre || 'popularity.desc';

  return (
    <>
      <Genres />
      <MovieList genre={genre} />
    </>
  );
};
export default MoviePage;

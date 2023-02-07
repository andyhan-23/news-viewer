import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 10%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const MovieList = ({ genre }) => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = genre === 'popularity.desc' ? '' : `sort_by=${genre}`;
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=7f1cad794b5dfdeff3acea7bd729e2c9&language=ko&${query}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        );
        setResults(response.data.results);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [genre]);

  if (loading) {
    return <MovieListBlock>대기 중...</MovieListBlock>;
  }
  if (!results) {
    return null;
  }

  return (
    <MovieListBlock>
      {results.map((result) => (
        <MovieItem key={result.poster_path} result={result} />
      ))}
    </MovieListBlock>
  );
};
export default MovieList;

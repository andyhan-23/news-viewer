import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
  .poster {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    h4 {
      color: red;
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-spave: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const MovieItem = ({ result }) => {
  const poster = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, release_date, overview } = result;
  return (
    <MovieItemBlock>
      <div className="poster">
        <img src={poster + poster_path} alt="poster" />
      </div>
      <div className="contents">
        <h2>{title}</h2>
        <p>{overview}</p>
        <h4>{release_date}</h4>
      </div>
    </MovieItemBlock>
  );
};
export default MovieItem;

import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const genres = [
  {
    name: 'popularity.desc',
    text: '인기도 내림차순',
  },
  {
    name: 'popularity.asc',
    text: '인기도 오름차순',
  },
  {
    text: '상영일 내림차순',
    name: 'release_date.desc',
  },
  {
    text: '상영일 오름차순',
    name: 'release_date.asc',
  },
  {
    text: '평점 내림차순',
    name: 'vote_average.desc',
  },
  {
    text: '평점 오름차순',
    name: 'vote_average.asc',
  },
];

const GenresBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Genre = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: red;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px splid red;
    color: red;
    &:hover {
      color: red;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Genres = () => {
  return (
    <GenresBlock>
      {genres.map((g) => (
        <Genre
          key={g.name}
          activeClassName="active"
          exact={g.name === 'popularity.desc'}
          to={g.name === 'popularity.desc' ? '/' : `/${g.name}`}
        >
          {g.text}
        </Genre>
      ))}
    </GenresBlock>
  );
};
export default Genres;

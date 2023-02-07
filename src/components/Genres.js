import styled, { css } from 'styled-components';

const genres = [
  {
    name: 'all',
    text: '인기',
  },
  {
    name: 'Action',
    text: '액션',
  },
  {
    text: '어드벤쳐',
    name: 'Adventure',
  },
  {
    text: '애니메이션',
    name: 'Animation',
  },
  {
    text: '코미디',
    name: 'Comedy',
  },
  {
    text: '범죄',
    name: 'Crime',
  },
  {
    text: '다큐',
    name: 'Documentary',
  },
  {
    text: '드라마',
    name: 'Drama',
  },
  {
    text: '가족',
    name: 'Family',
  },
  {
    text: '판타지',
    name: 'Fantasy',
  },
  {
    text: '역사',
    name: 'History',
  },
  {
    text: '공포',
    name: 'Horror',
  },
  {
    text: '음악',
    name: 'Music',
  },
  {
    text: '미스터리',
    name: 'Mystery',
  },
  {
    text: '로맨스',
    name: 'Romance',
  },
  {
    text: '공상과학',
    name: 'Science Fiction',
  },
  {
    text: 'TV 영화',
    name: 'TV Movie',
  },
  {
    text: '스릴러',
    name: 'Thriller',
  },
  {
    text: '전쟁',
    name: 'War',
  },
  {
    text: '외국',
    name: 'Western',
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

const Genre = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: red;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid red;
      color: red;
      &:hover {
        color: red;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Genres = ({ onSelect, genre }) => {
  return (
    <GenresBlock>
      {genres.map((g) => (
        <Genre
          key={g.name}
          active={genre === g.name}
          onClick={() => onSelect(g.name)}
        >
          {g.text}
        </Genre>
      ))}
    </GenresBlock>
  );
};
export default Genres;

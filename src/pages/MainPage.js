import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const naviage = useNavigate();
  const NewsButton = () => {
    naviage('/all');
  };
  const MovieButton = () => {
    naviage('/popularity.desc');
  };
  return (
    <>
      <h1>메인 페이지</h1>
      <button onClick={NewsButton}>뉴스</button>
      <button onClick={MovieButton}>영화</button>
    </>
  );
};
export default MainPage;

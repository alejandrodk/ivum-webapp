import styled from 'styled-components';

export const DivIntro = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;

  h1,
  h2 {
    text-align: center;
    width: 100%;
    color: white;
  }
  h2 {
    font-weight: 300;
    text-align: center;
    font-size: 38px;
    margin: 0 25%;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 25px;
      margin: 5% 0;
    }
    h2 {
      font-size: 20px;
      margin: auto;
    }
  }
`;
export const DivButtons = styled.div`
  width: 32%;
  background: white;
  border-radius: 8px;
  height: 42px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-top: 7%;

  @media (max-width: 768px) {
    width: 100%;
    background: transparent;
    flex-wrap: wrap;
  }
`;

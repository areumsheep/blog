import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.color['livid50']};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;
export const HeaderContent = styled.div`
  max-width: 680px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 680px) {
    width: 95%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 15px;
`;

export const Main = styled.main`
  max-width: 680px;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 680px) {
    width: 95%;
  }
`;

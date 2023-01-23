import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
`;
export const HeaderContent = styled.div`
  max-width: 680px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 15px;
`;

export const Main = styled.main`
  max-width: 680px;
  margin: 0 auto;
  margin-top: 30px;
`;

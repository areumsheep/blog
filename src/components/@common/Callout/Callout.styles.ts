import styled from '@emotion/styled';

export const Callout = styled.aside`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 18px 20px;
  margin: 25px 0;
  background-color: ${({ theme }) => theme.color.livid50};
`;

export const Icon = styled.div`
  margin-right: 20px;
  font-size: 25px;

  img {
    border-radius: 50%;
  }
`;

export const Description = styled.div``;

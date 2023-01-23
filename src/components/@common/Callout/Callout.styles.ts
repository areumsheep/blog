import styled from '@emotion/styled';

export const Callout = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 18px 20px;
  margin-bottom: 25px;
  background-color: ${({ theme }) => theme.color.livid50};
`;

export const Icon = styled.div`
  margin-right: 12px;

  img {
    border-radius: 50%;
  }
`;

export const Description = styled.div``;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

export const TriggerWrapper = styled.sup`
  padding: 3px 0;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 1000000000;
  padding: 10px 13px;
  font-size: 12px;
  border-radius: 10px;
  cursor: text;

  width: auto;
  max-width: 225px;

  word-break: break-word;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray600};

  svg {
    margin-top: 5px;
  }
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from 'components/@common';
import type { ChipProps } from './Chip.types';

export const Chip = styled(Typography)<ChipProps>`
  height: 23px;
  line-height: 25px;

  padding: 0 15px;
  border-radius: 20px;

  background-color: ${({ theme, backgroundColor = 'livid50', type }) =>
    type === 'filled' ? theme.color[backgroundColor] : theme.color['white']};

  border: 1px solid
    ${({ theme, backgroundColor = 'livid50', type }) =>
      type === 'outlined' ? theme.color[backgroundColor] : 'none'};
`;

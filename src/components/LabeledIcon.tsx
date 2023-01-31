import React from 'react';
import { Flex, Icon, Typography } from 'components/@common';
import type { IconProps } from 'components/@common/Icon/Icon.types';

interface Props extends IconProps {
  label: string;
}

const LabeledIcon = ({ icon, variant = 'circular', label }: Props) => {
  return (
    <Flex alignItems="flex-start">
      <Icon icon={icon} variant={variant} />
      <Typography variant="body2" color="livid300">
        {label}
      </Typography>
    </Flex>
  );
};

export default LabeledIcon;

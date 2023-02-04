import { ComponentProps } from 'react';
import Callout from './Callout';

type CalloutIconArgs = ComponentProps<typeof Callout.Icon> & { iconChildren?: React.ReactNode };
type CalloutDescriptionArgs = ComponentProps<typeof Callout.Description> & {
  descriptionChildren?: React.ReactNode;
};

export type CalloutArgs = CalloutIconArgs & CalloutDescriptionArgs;

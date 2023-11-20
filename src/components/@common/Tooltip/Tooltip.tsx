import { PropsWithChildren, useContext, useId } from 'react';

import TooltipProvider, { TooltipContext } from './TooltipProvider';
import TooltipPortal from './TooltipPortal';
import * as Styled from './Tooltip.styled';

const Tooltip = ({ children }: PropsWithChildren) => {
  return (
    <TooltipProvider>
      <Tooltip.Root>{children}</Tooltip.Root>
    </TooltipProvider>
  );
};

Tooltip.Root = ({ children }: PropsWithChildren) => {
  const uniqueId = useId();
  const { setUniqueId, open, close } = useContext(TooltipContext);
  setUniqueId(uniqueId);

  return (
    <Styled.Wrapper id={uniqueId} onMouseOver={open} onMouseLeave={close}>
      {children}
    </Styled.Wrapper>
  );
};
Tooltip.Trigger = ({ children }: PropsWithChildren) => {
  return <Styled.TriggerWrapper>{children}</Styled.TriggerWrapper>;
};
Tooltip.Content = ({ children }: PropsWithChildren) => {
  const { uniqueId, isOpened } = useContext(TooltipContext);
  console.log(`Content: ${uniqueId}`);

  return (
    <div>
      {isOpened && (
        <TooltipPortal id={uniqueId}>
          <Styled.Content>{children}</Styled.Content>
        </TooltipPortal>
      )}
    </div>
  );
};

export default Tooltip;

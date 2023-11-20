import { createContext, PropsWithChildren, useState } from 'react';
import useToggle from 'hooks/useToggle';
import type { TooltipContextProps } from './Tooltip.types';

export const TooltipContext = createContext<TooltipContextProps>({
  isOpened: false,
  open: () => {},
  close: () => {},
  uniqueId: '',
  setUniqueId: () => {},
});

TooltipContext.displayName = 'TooltipContext';

const TooltipProvider = ({ children }: PropsWithChildren) => {
  const [uniqueId, setUniqueId] = useState('');
  const { isOpened, open, close } = useToggle();

  return (
    <TooltipContext.Provider value={{ isOpened, open, close, uniqueId, setUniqueId }}>
      {children}
    </TooltipContext.Provider>
  );
};

export default TooltipProvider;

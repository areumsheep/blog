export interface TooltipProps {}

export interface TooltipPortalProps {
  id: string;
}

export interface TooltipContextProps {
  isOpened: boolean;
  open: () => void;
  close: () => void;
  uniqueId: string;
  setUniqueId: React.Dispatch<React.SetStateAction<string>>;
}

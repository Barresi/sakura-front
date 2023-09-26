import { FC, ReactNode, useState } from "react";
import Button from "@ui/button/button";
import { Badge } from "@ui/badge/badge";

type obj = {
  text: string;
  type: string;
  badge?: number;
};

interface TabContainerProps {
  buttons: obj[];
  className?: string;
}

export const TabContainer: FC<TabContainerProps> = ({ buttons, className }) => {
  const [active, setActive] = useState(buttons[0].type);

  const clickHandler = (type: string) => {
    setActive(type);
  };

  return (
    <div className={className}>
      {buttons.map(({ text, badge, type }) => (
        <TabButton
          badge={badge}
          onClick={() => clickHandler(type)}
          active={type === active}
        >
          {text}
        </TabButton>
      ))}
    </div>
  );
};

interface TabButtonProps {
  children: ReactNode;
  badge?: number;
  active?: boolean;
  onClick?: () => void;
}

const TabButton: FC<TabButtonProps> = ({ children, active, onClick, badge }) => {
  console.log(badge);

  return (
    <div>
      <Button
        className={`w-full flex justify-start ${active && "bg-text"}`}
        variant="text"
        onClick={onClick}
      >
        {children}
        {badge && <Badge>{badge}</Badge>}
      </Button>
    </div>
  );
};

export default TabButton;

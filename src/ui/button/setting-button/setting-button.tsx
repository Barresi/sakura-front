import { FC } from "react";
import { cn } from "@utils/utils";
import { ButtonProps } from "../button";
import Button from "../button";
import { Badge } from "@ui/badge/badge";

interface SettingButtonProps extends ButtonProps {
  badge?: number;
}

const SettingButton: FC<SettingButtonProps> = ({ className, badge = 0, ...props }) => {
  return (
    <Button
      className={cn(
        "w-[45px] p-[10px] rounded-[10px] relative text-setting-foreground bg-setting border-setting-border hover:text-setting-activeForeground hover:bg-setting-active hover:border-setting-border",
        className,
      )}
      variant="secondary"
      {...props}
    >
      {/* если ширина кнопки не равна 45px, тогда badge будет не в нужном месте, нужно как нибудь исправить */}
      {badge! > 0 && (
        <Badge className="w-[19px] h-[19px] absolute top-[3px] right-[5px]">
          {badge}
        </Badge>
      )}
    </Button>
  );
};

export default SettingButton;

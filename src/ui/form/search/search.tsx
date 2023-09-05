import { FC } from "react";
import Input, { InputProps } from "../input/input";

import icon from "@assets/ui/Search.svg";
import { cn } from "@src/utils/utils";

interface IProps extends Omit<InputProps, "type"> {}

const Search: FC<IProps> = ({ className, ...props }) => {
  return (
    <div className="flex items-center relative">
      <Input
        className={cn("py-[10px] rounded-[10px]", className)}
        placeholder="Поиск"
        type="text"
        {...props}
      />

      <img className="absolute top-[52%] right-4 translate-y-[-100%]" src={icon} alt="" />
    </div>
  );
};

export default Search;

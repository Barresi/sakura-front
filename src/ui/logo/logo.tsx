import { FC } from "react";
import { useTheme } from "@components/theme-provider/theme-provider";

import logoLight from "@assets/ui/logo-light.svg";
import logoDark from "@assets/ui/logo-dark.svg";

const Logo: FC = () => {
  const { theme } = useTheme();

  return <img src={theme === "dark" ? logoDark : logoLight} alt="Sakura logo" />;
};

export default Logo;

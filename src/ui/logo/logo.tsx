import { FC } from "react";
import { useTheme } from "@components/theme-provider/theme-provider";
import { useWindowSize } from "@src/hooks/useWindowSize";

import logoLight from "@assets/ui/logo-light.svg";
import logoDark from "@assets/ui/logo-dark.svg";
import logoMobileLight from "@assets/ui/logo-mobile-light.svg";
import logoMobileDark from "@assets/ui/logo-mobile-dark.svg";

interface LogoProps {
  isAdaptive?: boolean;
}

const Logo: FC<LogoProps> = ({ isAdaptive = false }) => {
  const { theme } = useTheme();
  const isMobile = useWindowSize(1024);

  const desk = theme === "dark" ? logoDark : logoLight;
  const mobile = theme === "dark" ? logoMobileDark : logoMobileLight;

  if (!isAdaptive) {
    return <img src={desk} alt="Sakura logo" />;
  }

  return <img src={isMobile ? mobile : desk} alt="Sakura logo" />;
};

export default Logo;

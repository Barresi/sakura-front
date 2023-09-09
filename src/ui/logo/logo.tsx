import { FC } from "react";
import { useTheme } from "@components/theme-provider/theme-provider";

import logoLight from "@assets/ui/logo-light.svg";
import logoDark from "@assets/ui/logo-dark.svg";
import logoMobileLight from "@assets/ui/logo-mobile-light.svg";
import logoMobileDark from "@assets/ui/logo-mobile-dark.svg";
import { useWindowSize } from "@utils/utils";

const Logo: FC = () => {
  const { theme } = useTheme();
  const isMobile = useWindowSize(1024);

  const desk = theme === "dark" ? logoDark : logoLight;
  const mobile = theme === "dark" ? logoMobileDark : logoMobileLight;

  return <img src={isMobile ? mobile : desk} alt="Sakura logo" />;
};

export default Logo;

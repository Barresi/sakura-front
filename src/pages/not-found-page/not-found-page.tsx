import notFoundDark from "@assets/404 dark.svg";
import notFoundLight from "@assets/404 light.svg";
import { useTheme } from "@src/components/theme-provider/theme-provider";
import { FC } from "react";

const NotFoundPage: FC<{ type: "inside" | "outside" }> = ({ type }) => {
  const { theme } = useTheme();
  const insideClass =
    "flex justify-center items-center flex-auto h-[calc(100vh-124px)] px-5";
  const outsideClass = "w-[100vw] h-[100vh] flex justify-center items-center px-5";
  return (
    <div className={type === "inside" ? insideClass : outsideClass}>
      <img
        src={theme === "dark" ? notFoundDark : notFoundLight}
        alt="not found"
        className="max-w-[321px]"
      />
    </div>
  );
};

export default NotFoundPage;

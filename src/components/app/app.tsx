import { FC } from "react";
import { Input } from "@ui/input";
import { Textarea } from "@src/ui/textarea";
import Button from "@src/ui/button";
import { useTheme } from "../theme-provider/theme-provider";

const App: FC = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (theme: string) => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <div className="pb-4">
      <div className="mt-4 flex justify-center items-center">
        <Button onClick={() => toggleTheme(theme)}>Change Theme</Button>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Inputs</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Login" type="text" />
          <Textarea className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Password" type="password" />
          <Textarea className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Password" type="password" />
          <Textarea className="min-w-[400px]" placeholder="Text" />
        </div>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Button color="red">Добавить в друзья</Button>
          <Button variant="secondary">Добавить в друзья</Button>
          <Button variant="link">Добавить в друзья</Button>
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Button color="red">Добавить в друзья</Button>
          <Button variant="secondary">Добавить в друзья</Button>
          <Button variant="link">Добавить в друзья</Button>
        </div>
      </div>
    </div>
  );
};

export default App;

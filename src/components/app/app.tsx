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

  // TODO: обсудить вставку картинок
  const icon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3786 8.94975L8.96373 18.3648C8.68452 18.644 8.32892 18.8343 7.94174 18.9117L5 19.5001L5.58835 16.5583C5.66579 16.1711 5.85609 15.8155 6.13529 15.5363L15.5502 6.12132M18.3786 8.94975L19.7928 7.53553C20.1834 7.14501 20.1834 6.51184 19.7928 6.12132L18.3786 4.70711C17.9881 4.31658 17.3549 4.31658 16.9644 4.70711L15.5502 6.12132M18.3786 8.94975L15.5502 6.12132"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            error="Error"
            minLength={4}
            required
            className="min-w-[400px]"
            placeholder="Login"
            type="text"
          />
          <Textarea error="Error" className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            error="Error"
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
          />
          <Textarea error="Error" className="min-w-[400px]" placeholder="Text" />
        </div>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Form</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4 flex flex-col justify-center items-center gap-4 flex-wrap"
      >
        <Input
          className="w-[400px]"
          minLength={4}
          type="text"
          placeholder="Login"
          required
        />
        <Input
          className="w-[400px]"
          minLength={8}
          type="password"
          placeholder="Password"
          required
        />
        <Textarea className="w-[400px]" placeholder="Your Comment" />
        <Button className="w-[400px]" type="submit" variant={"default"}>
          Send
        </Button>
      </form>

      <h1 className="text-center text-4xl mt-8 text-red-500">Buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Button variant="default">
            Добавить в друзья
            {icon}
          </Button>
          <Button variant="secondary">
            Добавить в друзья
            {icon}
          </Button>
          <Button variant="link">
            Добавить в друзья
            {icon}
          </Button>
          <Button variant="outline">
            Добавить в друзья
            {icon}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;

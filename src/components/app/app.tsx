import { FC } from "react";
import Input from "@ui/input/input";
import Textarea from "@ui/textarea/textarea";

const App: FC = () => {
  return (
    <div className="pb-4">
      <h1 className="text-center text-4xl mt-8 text-red-500">Inputs</h1>

      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Login" type="text" size="sm" />
          <Input className="min-w-[400px]" placeholder="Login" type="text" size="base" />
          <Input className="min-w-[400px]" placeholder="Login" type="text" size="lg" />
          <Textarea className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="sm"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="base"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="lg"
          />
          <Textarea className="min-w-[400px]" placeholder="Text" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="sm"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="base"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="lg"
          />
          <Textarea className="min-w-[400px]" placeholder="Text" error />
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center gap-4">
        <div className="bg-[#181823] p-4 flex flex-col justify-center items-center gap-4">
          <Input
            className="min-w-[400px]"
            placeholder="Login"
            type="text"
            size="sm"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Login"
            type="text"
            size="base"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Login"
            type="text"
            size="lg"
            theme="dark"
          />
          <Textarea className="min-w-[400px]" placeholder="Text" theme="dark" />
        </div>

        <div className="bg-[#181823] p-4 flex flex-col justify-center items-center gap-4">
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="sm"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="base"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            type="password"
            size="lg"
            theme="dark"
          />
          <Textarea className="min-w-[400px]" placeholder="Text" theme="dark" />
        </div>

        <div className="bg-[#181823] p-4 flex flex-col justify-center items-center gap-4">
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="sm"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="base"
            theme="dark"
          />
          <Input
            className="min-w-[400px]"
            placeholder="Password"
            error
            type="password"
            size="lg"
            theme="dark"
          />
          <Textarea className="min-w-[400px]" placeholder="Text" error theme="dark" />
        </div>
      </div>
    </div>
  );
};

export default App;

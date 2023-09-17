import { FC } from "react";
import Input from "@ui/form/input/input";
import Textarea from "@ui/form/textarea/textarea";
import Button from "@ui/button/button";
import { AvatarFallback, AvatarImage } from "@ui/avatar/avatar";
import { Avatar } from "@ui/avatar/avatar";
import Sidebar from "@ui/sidebar/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/form/select/select";
import Search from "@ui/form/search/search";
import ActionButton from "@ui/button/action-button/action-button";
import MessageCard from "@ui/card/message-card/message-card";
import LikedCard from "@ui/card/liked-card/liked-card";
import RequestCard from "@ui/card/request-card/request-card";
import NewInput from "@ui/form/new-input/new-input";
import MessageInput from "@ui/form/message-input/message-input";
import FriendCard from "@ui/card/friend-card/friend-card";
import SettingButton from "@ui/button/setting-button/setting-button";
import Header from "@ui/header/header";
import Profile from "@ui/profile/profile";
import FriendPanel from "@ui/friend-panel/friend-panel";
import MobileNav from "@ui/button/mobile-nav/mobile-nav";
import { useWindowSize } from "@utils/utils";

import andrey from "@assets/andrey.png";
import suba from "@assets/478889.jpg";
import suba2 from "@assets/478889_photo-resizer.ru.jpg";
import photo from "@assets/photo.svg";

const App: FC = () => {
  const isMobile = useWindowSize(1024);

  return (
    <div className="pb-20 lg:pb-4">
      <Header className="fixed top-0 left-0" avatar={photo} />

      <h1 className="text-center text-4xl mt-20 text-red-500">Inputs</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Login" type="text" />
          <Textarea className="min-w-[400px]" placeholder="Text" />

          <Select>
            <SelectTrigger className="min-w-[400px] px-5 py-4">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Input className="min-w-[400px]" placeholder="Password" type="password" />
          <Textarea className="min-w-[400px]" placeholder="Text" />

          <Select>
            <SelectTrigger className="min-w-[400px] px-5 py-4">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="light1">Light</SelectItem>
              <SelectItem value="dark1">Dark</SelectItem>
              <SelectItem value="system1">System</SelectItem>
              <SelectItem value="light2">Light</SelectItem>
              <SelectItem value="dark2">Dark</SelectItem>
              <SelectItem value="system2">System</SelectItem>
              <SelectItem value="light3">Light</SelectItem>
              <SelectItem value="dark3">Dark</SelectItem>
              <SelectItem value="system3">System</SelectItem>
              <SelectItem value="light4">Light</SelectItem>
              <SelectItem value="dark4">Dark</SelectItem>
              <SelectItem value="system4">System</SelectItem>
            </SelectContent>
          </Select>
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
        className="w-[400px] mx-auto mt-4 flex flex-col justify-center items-center gap-4 flex-wrap"
      >
        <Input className="" minLength={4} type="text" placeholder="Login" required />
        <Input
          className=""
          minLength={8}
          type="password"
          placeholder="Password"
          required
        />
        <Textarea placeholder="Your Comment" />
        <Button type="submit" variant={"default"}>
          Send
        </Button>
      </form>

      <h1 className="text-center text-4xl mt-8 text-red-500">Buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <Button icon="edit" variant="default">
            Добавить в друзья
          </Button>
          <Button icon="edit" variant="secondary">
            Добавить в друзья
          </Button>
          <Button icon="edit" variant="link">
            Добавить в друзья
          </Button>
          <Button icon="edit" variant="outline">
            Добавить в друзья
          </Button>
        </div>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Avatar</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Avatar className="w-[96px] h-[96px]" text="Андрей">
          <AvatarImage src={andrey} className="" />
          <AvatarFallback>Andrey</AvatarFallback>
        </Avatar>

        <Avatar className="w-[96px] h-[96px]" text="Subaru 2000x1000">
          <AvatarImage src={suba} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="w-[96px] h-[96px]" text="Subaru 300x150">
          <AvatarImage src={suba2} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="rounded-none w-[96px] h-[96px]" text="Subaru 2000x1000">
          <AvatarImage src={suba} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <Avatar className="rounded-none w-[96px] h-[96px]" text="Subaru 300x150">
          <AvatarImage src={suba2} className="rounded-none" />
          <AvatarFallback>Subaru</AvatarFallback>
        </Avatar>

        <p className="mt-4 text-xl text-red-500">
          Даже если делать квадратные аватары, а сверху накладывать маску, то все будет
          также, я думаю. <br /> Игра с размером не сработала, вроде как. Потом еще
          посмотрю
        </p>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Sidebar</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Sidebar />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Search</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Search className="min-w-[300px] lg:min-w-[600px]" />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Action buttons</h1>

      <div className="mx-auto mt-4 flex justify-center items-center gap-4 flex-wrap">
        <ActionButton className="w-[200px]" iconPos="left" icon="like">
          10
        </ActionButton>
        <ActionButton className="w-[200px]" iconPos="left" icon="comment">
          10
        </ActionButton>
        <ActionButton className="w-[200px]" iconPos="left" icon="share">
          10
        </ActionButton>
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Notifications</h1>

      <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 flex-wrap">
        <MessageCard
          className="w-[90%] lg:w-[40%] mb-8 lg:mb-0"
          data={{
            img: andrey,
            imgFallback: "Andrey",
            name: "Андрей Петров",
            message: "Привет, как дела?",
            date: "вчера",
            badge: "2",
          }}
        />
        <MessageCard
          className="w-[90%] lg:w-[40%]"
          data={{
            img: andrey,
            imgFallback: "Andrey",
            name: "Андрей Петров",
            message: "Там прислали новые баги!",
            date: "вчера",
            badge: "2",
          }}
        />
      </div>

      <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 flex-wrap">
        <LikedCard
          className="w-[90%] lg:w-[40%] mb-8 lg:mb-0"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="10 минут назад"
        />

        <LikedCard
          className="w-[90%] lg:w-[40%]"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="10 минут назад"
        />
      </div>

      <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 flex-wrap">
        <RequestCard
          className="w-[90%] lg:w-[40%] mb-8 lg:mb-0"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="30 минут назад"
        />

        <RequestCard
          className="w-[90%] lg:w-[40%]"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
          date="30 минут назад"
        />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Smth</h1>

      <div className="flex flex-col w-[90%] mx-auto">
        <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
          <MessageInput className="min-w-[50vw] mr-[15%]" />
        </div>

        <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
          <NewInput />
          <NewInput avatar={photo} />
        </div>
      </div>
      <h1 className="text-center text-4xl mt-8 text-red-500">Friend card</h1>

      <div className="mt-4 flex flex-col lg:flex-row justify-center items-center gap-4 flex-wrap">
        <FriendCard
          className="w-[90%] lg:w-[40%] mb-8 lg:mb-0"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
        />

        <FriendCard
          className="w-[90%] lg:w-[40%]"
          img={andrey}
          imgFallback="Andrey"
          name="Андрей Петров"
        />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Setting buttons</h1>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <SettingButton icon="setting" />
        <SettingButton icon="notification" />
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 flex-wrap">
        <SettingButton icon="setting" badge={5} />
        <SettingButton icon="notification" badge={9} />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Profile</h1>

      <div className="w-[90%] lg:w-[485px] mx-auto mt-4 flex justify-center items-center gap-4 flex-wrap">
        <Profile />
      </div>

      <h1 className="text-center text-4xl mt-8 text-red-500">Friend Panel</h1>

      <div className="w-[300px] lg:w-[700px] mx-auto mt-4 flex justify-center items-center gap-4 flex-wrap">
        <FriendPanel />
      </div>

      {isMobile && <MobileNav />}
    </div>
  );
};

export default App;

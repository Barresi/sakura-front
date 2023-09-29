import { FC } from "react";
import Button from "../button/button";
import Friends from "@src/components/ui/friends/friends";

import friend from "@assets/friend.svg";
import avatar from "@assets/photo.svg";
import location from "@assets/ui/Location Point.svg";
import user from "@assets/ui/User.svg";
import bank from "@assets/ui/bank.svg";
import calendar from "@assets/ui/Calendar.svg";
import UserAvatar from "../avatar/avatar";

const Profile: FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-[15px]">
        <UserAvatar src={avatar} className="w-36 h-36" />
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full  flex items-center justify-between">
            <h2 className="text-[32px] leading-[41px]">Борис Маслов</h2>
            <Button
              icon="edit"
              variant="secondary"
              className="w-[54px] h-[44px] rounded-[10px]"
            />
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={location} alt="" />
            <span className="text-[18px] leading-[23px]">Москва</span>
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={user} alt="" />
            <span className="text-[18px] leading-[23px]">Мужской</span>
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={bank} alt="" />
            <span className="text-[18px] leading-[23px]">Никнейм</span>
          </div>

          <div className="flex items-center gap-[5px]">
            <img src={calendar} alt="" />
            <span className="text-[18px] leading-[23px]">20.05.1995</span>
          </div>
        </div>
      </div>

      <Friends avatars={[friend, friend, friend, friend, friend, friend, friend]} />

      <p className="text-[20px] leading-[26px] ">
        Я - опытный UX/UI дизайнер с более чем 4-летним стажем работы в этой области.
      </p>
    </div>
  );
};

export default Profile;

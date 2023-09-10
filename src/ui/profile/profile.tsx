import { FC } from "react";
import Button from "../button/button";
import Friends from "../friends/friends";
import { Avatar } from "../avatar/avatar";
import { AvatarImage } from "../avatar/avatar";

import friend from "@assets/friend.svg";
import avatar from "@assets/photo.svg";
import location from "@assets/ui/Location Point.svg";
import user from "@assets/ui/User.svg";
import bank from "@assets/ui/bank.svg";
import calendar from "@assets/ui/Calendar.svg";

const edit = (
  <svg
    width="24"
    height="25"
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

const Profile: FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-[15px]">
        <Avatar className="w-36 h-36">
          <AvatarImage src={avatar} />
        </Avatar>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full  flex items-center justify-between">
            <h2 className="text-[32px] leading-[41px]">Борис Маслов</h2>
            <Button variant="secondary" className="w-[54px] h-[44px] rounded-[10px]">
              {edit}
            </Button>
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

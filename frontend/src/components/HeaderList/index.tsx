import React, { useState } from "react";
import { IonIcon } from "@ionic/react";

interface IHeaderList {
  iconName: string;
  text: string;
  href: string ;
}

const HeaderList = ({ href, iconName, text }: IHeaderList) => {
  const [ isHovered , setisHovered ] = useState(false);

  const handleHover = () =>{
    setisHovered((prevState) => !prevState)
  }

  return (
    <li
      className="relative list-none w-[80px] h-[70px] flex justify-center items-center text-center"
      onClick={handleHover}
    >
      <a href={href} className="relative flex justify-center items-center flex-col text-center font-medium gap-10">
        <span
          className={`relative block text-[1.5em] leading-[75px]   ${
            !isHovered
              ? "translate-y-2  text-violet-50"
              : "duration-500 text-fourth"
          }`}
        >
          <IonIcon icon={iconName} />
        </span>
        <span
          className={`absolute opacity-0 font-semibold text-[0.5em] text-[#fff] uppercase   ${
            !isHovered
              ? "translate-y-4 duration-500"
              : "translate-y-[18px] opacity-100"
          }`}
        >
          {text}
        </span>
      </a>
    </li>
  );
};

export default HeaderList;

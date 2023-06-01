import React, { useState } from "react";
import {
  person,
  home,
  restaurant,
  paperPlane,
  trendingUp,
} from "ionicons/icons";

import HeaderList from "../HeaderList";

const Header = () => {
  return (
    <div className="relative w-full h-[60px] flex justify-center items-center bg-black rounded-[10px]">
      <ul className="relative flex justify-between items-center ">
        <HeaderList href="/register" iconName={home} text="Home" />
        <HeaderList href="/historico" iconName={restaurant} text="Historico" />
        <HeaderList href="progresso" iconName={trendingUp} text="Progresso" />
        <HeaderList href="/login" iconName={person} text="Perfil" />
        <HeaderList href="" iconName={paperPlane} text="Compartilhar" />
      </ul>
    </div>
  );
};

export default Header;

import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h1 className="">{name}</h1>
    </div>
  );
}

export default HeaderItem;

import React from "react";

interface IHeader {
  category: string;
  title: string;
}

const Header = ({ category, title }: IHeader) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl fontextrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;

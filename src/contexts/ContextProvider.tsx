import React, { createContext, useContext, useState } from "react";

export interface IStateContext {
  [key: string]: boolean;
}

interface IContextProvider {
  children: React.ReactNode;
}

interface IContext {
  [key: string]: any;
}

const StateContext = createContext<IContext>({});

const initialState: IStateContext = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }: IContextProvider) => {
  // 화면크기에 따라 사이드바 렌더링
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);

  // theme colors
  const [currentColor, setCurrentColor] = useState("#03C9D7");

  // theme options
  const [currentMode, setCurrentMode] = useState("Light");

  // theme settings 사이드바 렌더링 여부
  const [themeSettings, setThemeSettings] = useState(false);

  // 상단오른쪽 프로필, 채팅, 알림 등
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  const closeNavbar = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: false });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        closeNavbar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

import React from "react";
import { MainWrap, MainTitle, MainContent } from "../styles/TodoMain";

interface IChildren {
  children: JSX.Element[];
}

function Main({ children }: IChildren): JSX.Element {
  return (
    <MainWrap>
      <MainTitle>일정 관리</MainTitle>
      <MainContent>{children}</MainContent>
    </MainWrap>
  );
}

export default Main;

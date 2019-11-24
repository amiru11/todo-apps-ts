import React from "react";

interface IChildren {
  children: JSX.Element[];
}

function Main({ children }: IChildren): JSX.Element {
  return (
    <div className="mainTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Main;

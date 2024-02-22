"use client";

import { PropsWithChildren } from "react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-screen h-screen overflow-x-hidden">{children}</div>;
};

export default PageContainer;

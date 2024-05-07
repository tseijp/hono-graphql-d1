import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props: { children: React.ReactNode}) => {
  const { children } = props;
  return (
    <div className="top-0 left-0 w-full h-[100dvh]">
      <Header />
      <main className="m-auto mt-8 mb-8 w-[80%] min-h-[80dvh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
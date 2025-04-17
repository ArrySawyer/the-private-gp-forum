"use client";

import { default as NextLink } from "next/link";
import LogoSvg from "@/svgs/Logo";
import LogoIconSvg from "@/svgs/LogoIcon";
import { useState } from "react";
import { Navigation } from "./Navigation";
import Button from "@/components/ui/Button";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  return (
    <header className="py-5 z-50 fixed top-0 w-screen">
      <div className={"mx-auto max-w-screen-md px-5"}>
        <div
          className={`group/header py-2 px-4 border border-dark/20 flex flex-col justify-between rounded-[26px] backdrop-blur-[20px] hover:border-dark hover:bg-white ${
            navigationOpen ? "bg-white sm:bg-white/40" : "bg-white/40"
          } sm:flex-row sm:items-center`}
        >
          <div className="flex justify-between items-center">
            <NextLink
              href="/"
              aria-label="Go to homepage via site logo"
              className="flex items-center"
            >
              <div className="hidden xs:block">
                <LogoSvg />
              </div>
              <div className="xs:hidden">
                <LogoIconSvg />
              </div>
            </NextLink>

            <Button
              className="p-4 sm:hidden"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-white ${
                    navigationOpen ? "rotate-45" : "-translate-y-1"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-4 bg-white ${
                    navigationOpen ? "-rotate-45" : "translate-y-0.5"
                  }`}
                />
              </div>
            </Button>
          </div>
          <Navigation
            navigationOpen={navigationOpen}
            setNavigationOpen={setNavigationOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

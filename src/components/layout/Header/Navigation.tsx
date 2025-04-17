"use client";

import Link from "@/components/ui/Link";
import { default as NextLink } from "next/link";

const navigationItems = [
  {
    title: "Home",
    link: "/",
    mobileOnly: true,
  },
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "Systems",
    link: "/systems",
  },
  {
    title: "News & Insights",
    link: "/news-insights",
  },
  {
    title: "Discord",
    link: "/discord",
  },
  {
    title: "Subscribe",
    link: "/subscribe",
  },
];

interface NavigationProps {
  navigationOpen: boolean;
  setNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation = ({
  navigationOpen,
  setNavigationOpen,
}: NavigationProps) => {
  return (
    <nav className={`${navigationOpen ? "flex justify-center" : "hidden sm:block"}`}>
      <ul className="flex flex-col gap-5 sm:gap-6 sm:flex-row">
        {navigationItems.map((item) => {
          return (
            <Link key={item.title}>
              <NextLink
                href={item.link}
                // onClick={(e) => handleLinkClick(e)}
              >
                {item.title}
              </NextLink>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

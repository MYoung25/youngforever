import React from "react";
import Link from "next/link";
import { NavigationSidebar } from "./navigationSidebar";

const menuItems = [
  {
    name: "Schedule",
    path: "/schedule",
  },
  {
    // routes for a wedding website
    name: "Our Story",
    path: "/our-story",
  },
  {
    name: "Registry",
    path: "/registry",
  },
  {
    name: "Travel",
    path: "/travel",
    options: [
      {
        name: "Accommodations",
        path: "/travel/accommodations",
      },
      {
        name: "Things To Do",
        path: "/things-to-do",
      },
    ],
  },
  {
    name: "RSVP",
    path: "/rsvp",
  },
];

export const Navigation = () => {
  return (
    <nav className="h-20 w-full bg-red flex flex-row place-content-between items-center border-b-4 border-gold border-double fixed top-0 z-30">
      <Link href="/">
        <span className="font-showtime text-gold text-4xl pl-4">
          [Young_Forever]
        </span>
      </Link>
      {/* // This is the desktop menu */}
      <ul className="flex-row justify-evenly gap-4 md:flex max-md:hidden flex-1 text-center">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="font-debonair text-gold text-2xl hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* // This is the hamburger menu */}

      <NavigationSidebar menuItems={menuItems} />
    </nav>
  );
};

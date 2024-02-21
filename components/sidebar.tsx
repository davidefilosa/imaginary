"use client";

import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Home,
  Sparkles,
  ImageIcon,
  Star,
  Scan,
  Blend,
  Camera,
  User,
  Coins,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: Home,
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: ImageIcon,
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: Star,
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: Scan,
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: Blend,
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: Camera,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: User,
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: Coins,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4">
        <Link
          className="flex items-center justify-center w-full gap-2"
          href="/"
        >
          <Sparkles className="w-8 h-8 text-sky-500" />
          <h1 className="text-2xl font-bold text-sky-500">Imaginary</h1>
        </Link>
        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={cn(
                      "flex-center p-16-semibold w-full whitespace-nowrap rounded-full transition-all hover:shadow-inner group",
                      isActive ? "bg-sky-500 text-white" : "text-gray-700",
                      !isActive && "hover:bg-sky-100"
                    )}
                  >
                    <Link
                      className="p-16-semibold flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <link.icon />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={cn(
                      "flex-center p-16-semibold w-full whitespace-nowrap rounded-full transition-all hover:shadow-inner group",
                      isActive ? "bg-sky-500 text-white" : "text-gray-700",
                      !isActive && "hover:bg-sky-100"
                    )}
                  >
                    <Link
                      className="p-16-semibold flex size-full gap-4 p-4"
                      href={link.route}
                    >
                      <link.icon />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-sky-500 bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

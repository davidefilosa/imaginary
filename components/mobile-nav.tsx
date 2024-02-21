"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  Blend,
  Camera,
  Coins,
  Home,
  ImageIcon,
  Menu,
  Scan,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="flex justyfy-between items-center fixed h-16 w-full border-b-4 border-sky-100 bg-white p-5 lg:hidden">
      <Link
        className="flex items-center justify-center w-full gap-2 md:py-2"
        href="/"
      >
        <Sparkles className="w-8 h-8 text-sky-500" />
        <h1 className="text-2xl font-bold text-sky-500">Imaginary</h1>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Menu className="w-8 h-8" />
            </SheetTrigger>
            <SheetContent>
              <>
                <div className="flex items-center justify-center w-full gap-2 md:py-2">
                  <Sparkles className="w-8 h-8 text-sky-500" />
                  <h1 className="text-2xl font-bold text-sky-500">Imaginary</h1>
                </div>

                <ul className=" mt-8 flex w-full flex-col items-start gap-5">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={cn(
                          "p-18 flex whitespace-nowrap",
                          isActive ? "text-sky-500" : "text-dark-700"
                        )}
                        key={link.route}
                      >
                        <Link
                          className="p-16-semibold flex size-full gap-4 p-4k cursor-pointer"
                          href={link.route}
                        >
                          <link.icon />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-sky-500">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;

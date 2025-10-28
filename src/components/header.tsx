"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  School,
  Menu,
  Newspaper,
  CalendarDays,
  Users,
  Info,
  GalleryHorizontal,
  Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AccessibilityOptions } from "./accessibility-options";

const navLinks = [
  { href: "/", label: "Home", icon: Newspaper },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/staff", label: "Staff", icon: Users },
  { href: "/gallery", label: "Gallery", icon: GalleryHorizontal },
  { href: "/about", label: "About Us", icon: Info },
];

const NavLink = ({
  href,
  label,
  icon: Icon,
  isMobile = false,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const linkClasses = cn(
    "flex items-center gap-2 rounded-md transition-colors duration-200",
    {
      "text-primary-foreground bg-primary/20 hover:bg-primary/30":
        isActive && !isMobile,
      "text-foreground hover:text-accent-foreground hover:bg-accent/50":
        !isActive && !isMobile,
      "text-foreground hover:bg-accent/80": isMobile,
      "bg-accent/90 text-accent-foreground": isActive && isMobile,
    },
    isMobile ? "p-3 text-lg" : "p-2 px-3 text-sm font-medium"
  );

  const content = (
    <>
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </>
  );

  return isMobile ? (
    <SheetClose asChild>
      <Link href={href} className={linkClasses}>
        {content}
      </Link>
    </SheetClose>
  ) : (
    <Link href={href} className={linkClasses}>
      {content}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 pl-2">
            <School className="h-7 w-7 text-accent" />
            <span className="font-bold font-headline text-lg">APSIS Hyd</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <AccessibilityOptions />
          <div className="md:hidden ml-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center gap-2">
                        <School className="h-7 w-7 text-accent" />
                        <span className="font-bold font-headline text-lg">
                          APSIS Hyd
                        </span>
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

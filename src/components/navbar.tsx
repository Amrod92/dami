"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/dami_logo.png";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className="relative">
        <header className="py-3">
          <div className="max-w-7xl mx-auto px-4 xl:px-0">
            <div className="flex items-center justify-between gap-x-4 rounded-2xl border border-border/60 bg-card px-5 py-2.5 text-card-foreground shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] transition-colors lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-stretch lg:gap-x-12 lg:rounded-[1.375rem]">
              <div className="flex items-center text-center gap-x-10">
                <Link href="/" title="Home">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      aria-label="Damī — Brackets and Slashes"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 10 V6 H9" />
                        <path d="M18 14 v4 h-3" />
                        <path d="M9.75 15 L13.25 9" />
                        <path d="M12.25 15 L15.75 9" />
                      </g>
                    </svg>
                  </>
                  <span className="font-semibold text-foreground">Damī</span>
                </Link>
                <span className="hidden h-4 w-[1px] bg-border lg:block"></span>
              </div>
              <nav className="hidden lg:block">
                <ul className="flex items-center">
                  <li>
                    <a
                      className="flex items-center gap-x-1.5 px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                      href="https://github.com/Amrod92/dami"
                    >
                      GitHub
                      <svg
                        className="h-4 text-muted-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-x-10 justify-self-end">
                <span className="hidden h-4 w-[1px] bg-border lg:block"></span>
                <div className="flex items-center gap-x-10 lg:gap-x-2">
                  <Link href="/dummy" replace>
                    <Button>
                      Try Now!
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-flask-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.5 0a.5.5 0 0 1 0 1H11v5.358l4.497 7.36c.099.162.16.332.192.503l.013.063.008.083q.006.053.007.107l-.003.09q-.001.047-.005.095-.006.053-.017.106l-.016.079q-.012.049-.028.096l-.028.086a1.5 1.5 0 0 1-.17.322 1.5 1.5 0 0 1-.395.394q-.04.028-.082.054-.045.026-.095.049l-.073.035-.09.033q-.05.02-.103.034-.04.01-.08.017-.053.012-.108.021l-.006.002-.202.013H1.783l-.214-.015a1.503 1.503 0 0 1-1.066-2.268L5 6.359V1h-.5a.499.499 0 0 1-.354-.854A.5.5 0 0 1 4.5 0zm.5 12a.5.5 0 0 0 0 1h1.885l-.61-1zm-1-2a.5.5 0 0 0 0 1h1.664l-.612-1zm-1-2a.5.5 0 0 0 0 1h1.441l-.61-1zM9 6a.5.5 0 0 0 0 1h1.22l-.147-.24A.5.5 0 0 1 10 6.5V6zm0-2a.5.5 0 0 0 0 1h1V4zm0-2a.5.5 0 0 0 0 1h1V2z" />
                      </svg>
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="text-foreground"
                        variant="outline"
                        size="icon"
                      >
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-foreground transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-foreground transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

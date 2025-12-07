import Link from "next/link";
import { Logo } from "./logo";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Logo size={45} />
          <h1 className="text-2xl font-medium tracking-tighter">Prime</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/roadmap">Roadmap</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

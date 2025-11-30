import { Logo } from "./logo";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Logo size={45} />
          <h1 className="text-2xl font-medium tracking-tighter">Prime</h1>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

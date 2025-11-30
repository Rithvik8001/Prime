import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 45 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors duration-200", className)}
      aria-label="Prime Logo"
    >
      <path
        d="M 50 15 
           C 30 15, 15 30, 15 50
           C 15 60, 18 68, 23 75
           C 28 82, 35 87, 43 89
           C 45 90, 47 90, 50 90
           C 53 90, 55 90, 57 89
           C 65 87, 72 82, 77 75
           C 82 68, 85 60, 85 50
           C 85 30, 70 15, 50 15 Z"
        className="stroke-foreground"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="35"
        cy="35"
        r="3"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="50"
        cy="30"
        r="2.5"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="65"
        cy="38"
        r="2.5"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="40"
        cy="55"
        r="2.5"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r="3"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="70"
        cy="50"
        r="2"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="45"
        cy="70"
        r="2.5"
        className="stroke-foreground"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

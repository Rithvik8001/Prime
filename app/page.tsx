import Navbar from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-5xl mx-auto p-4 flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center text-center space-y-8">
          <Logo size={64} />
          <div className="space-y-4">
            <h1 className="text-6xl font-medium tracking-tight">Prime</h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              Your essential roadmap to mastering full-stack engineering with
              TypeScript.
            </p>
          </div>
          <Button asChild size="lg" className="mt-4">
            <Link href="/roadmap">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

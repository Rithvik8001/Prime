import Navbar from "@/components/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full max-w-5xl mx-auto p-4 flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Prime</h2>
          <p className="text-muted-foreground max-w-md">
            Your essential roadmap to mastering full-stack engineering with
            TypeScript.
          </p>
          <Button asChild size="lg">
            <Link href="/roadmap">View Roadmap</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

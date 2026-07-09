import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-8xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">This page doesn&apos;t exist</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The link may be broken or the page moved. Head back to the portfolio.
      </p>
      <Link href="/" className="mt-8">
        <Button>Back to home</Button>
      </Link>
    </main>
  );
}

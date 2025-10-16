import { Button } from "@monorepo/ui";
import { formatGreeting } from "@monorepo/utils";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {formatGreeting("Monorepo")}
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          This Next.js workspace consumes shared utilities and UI components.
        </p>
      </div>
      <Button intent="primary">Explore the Workspace</Button>
    </main>
  );
}

import type { Metadata } from "next";
import { DummyBuilder } from "./_components/dummy-builder";

export const metadata: Metadata = {
  title: "Dummy JSON Builder | Damī",
  description:
    "Design realistic dummy data structures with AI-powered JSON generation tailored to your project.",
};

export default function DummyPage() {
  return (
    <section className="w-full space-y-6 py-6 lg:py-10 text-foreground">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold lg:text-3xl">
          Create your ideal dummy data in seconds
        </h1>
      </header>
      <DummyBuilder />
    </section>
  );
}

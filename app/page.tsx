import Hero from "@/components/Section/Hero";
import Integration from "@/components/Section/Integration";
import Services from "@/components/Section/Services";
import System from "@/components/Section/System";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-between">
      <Hero />
      <Integration />
      <System />
      <Services />
    </main>
  );
}

import { Catalog } from "@/components/site/catalog";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Info } from "@/components/site/info";
import { Location } from "@/components/site/location";
import { PlaceholderSection } from "@/components/site/placeholder-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Info />
        <Catalog />
        <PlaceholderSection id="quem-somos" title="Quem somos" />
        <PlaceholderSection id="eventos" title="Eventos" />
        <Location />
      </main>
      <Footer />
    </>
  );
}

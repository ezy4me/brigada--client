import { FAQSection } from "@/widgets/faq/ui/FaqSection";
import { Header } from "@/widgets/header/ui/Header";
import { Hero } from "@/widgets/hero/ui/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />


        <FAQSection />
      </main>
    </div>
  );
}

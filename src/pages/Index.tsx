import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Curriculum } from "@/components/Curriculum";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Curriculum />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;

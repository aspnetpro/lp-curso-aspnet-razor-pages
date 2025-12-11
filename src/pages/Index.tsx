import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Portfolio } from "@/components/Portfolio";
import { Curriculum } from "@/components/Curriculum";
import { TargetAudience } from "@/components/TargetAudience";
import { Pricing } from "@/components/Pricing";
import { Instructor } from "@/components/Instructor";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Portfolio />
      <Curriculum />
      <TargetAudience />
      <Pricing />
      <Instructor />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

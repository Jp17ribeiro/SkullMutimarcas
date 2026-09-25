import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Collections } from "@/components/Collections";
import { Manifesto } from "@/components/Manifesto";
import { StreetMarquee } from "@/components/StreetMarquee";
import { WhySkull } from "@/components/WhySkull";
import { StoreLocation } from "@/components/StoreLocation";
import { InstagramSection } from "@/components/InstagramSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SiteLoader } from "@/components/SiteLoader";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <SiteLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Collections />
        <Manifesto />
        <StreetMarquee />
        <WhySkull />
        <StoreLocation />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

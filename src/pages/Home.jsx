import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import Brands from "../components/sections/Brands";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import WhatsappButton from "../components/ui/WhatsappButton";

export default function Home() {
  return (
   <>
   <Navbar />

   <Hero />
   
   <Services />

   <WhyUs />

   <Process />

   <Brands />

   <Stats />

   <Testimonials />

   <CTA />
   
   <Footer />

   <WhatsappButton />
  
</>
  );
}
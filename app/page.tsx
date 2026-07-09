import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Certifications } from "@/components/sections/certifications";
// import { Testimonials } from "@/components/sections/testimonials"; // enable when you have real quotes
import { TechStack } from "@/components/sections/tech-stack";
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <TechStack />
      <Services />
      <Certifications />
      {/* <Testimonials /> — enable after adding real recommendations in lib/data.ts */}
      <Contact />
      <Footer />
    </main>
  );
}

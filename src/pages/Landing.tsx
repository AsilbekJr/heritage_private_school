import Hero from "../components/Hero";
import Value from "../components/Value";
import Programs from "../components/Programs";
import Achievements from "../components/Achievements";
import Facilities from "../components/Facilities";
import Contact from "../components/Contact";
export type SectionRefs = {
  about: React.RefObject<HTMLDivElement>;
  programs: React.RefObject<HTMLDivElement>;
  facilities: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
};
export default function Landing() {
  return (
    <div>
      <Hero />
      {/* Values Section */}
      <Value />
      {/* Programs Section */}
      <Programs />
      {/* Achievements Section */}
      <Achievements />
      {/* Facilities Section */}
      <Facilities />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}

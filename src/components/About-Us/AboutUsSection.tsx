import StackingCards from "../stacking-card";
import AboutSectionLast from "./AboutSectionLast";
import PageBreadcrumb from "../ui/PageBreadcrumb";
import { TimelineDemo } from "./TimelineDemo";

const AboutUsSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2 bg-gradient-to-b from-background via-primary/5 to-background">
      <PageBreadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />
         <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-foreground">
        About Us
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5 text-foreground/80">
        We are a team of dedicated professionals who are passionate about
        providing the best possible service to our clients.
      </p>
      <StackingCards projects={projects} />
      <TimelineDemo />
    </section>
  );
};

export default AboutUsSection;

const projects = [
  {
    title: "Welcome to Sri Jayasakthi Edible Oils Pvt. Ltd.",
    description:
      'Established with trust and tradition since 1985, Sri Jayasakthi Edible Oils Pvt. Ltd. stands as one of the most leading manufacturers and suppliers of premium-quality edible and non-edible oils. Over four decades, the group has evolved into a trusted producer of edible food products with multiple brands in Southern India',
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Our Mission",
    description:
      "To deliver pure, authentic, and superior-quality oils that nourish lives and strengthen trust — through innovation, integrity, and sustainable manufacturing practices. We aim to empower communities, support farmers, and maintain an unwavering commitment to purity, quality, and customer satisfaction in every litre we produce",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as India’s most trusted and sustainable edible oil manufacturer, setting new benchmarks in quality, purity, and excellence. We envision expanding our footprint across global markets while upholding the heritage of Indian oil craftsmanship and ensuring a healthier, more natural future for every household.",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
  {
    title: "Our Strengths",
    description:
      "40+ years of excellence in the edible oil industry. Massive production capacity and nationwide distribution network. Advanced refining and filtering technologies for unmatched purity. Dedicated R&D and quality assurance teams. Sustainable sourcing and ethical business practices",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Our Commitment to Quality",
    description:
      "With a robust production capacity of 3,000 tonnes of refined palm olien and edible oils per month, we have become a trusted name serving wholesalers, retailers, and industries across the nation.",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

import React from "react";
import AboutPage from "../about-page";
import { TestimonialSection } from "../testimonials";

const BulkOrderSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Bulk Order
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5">
        We are here to help you. Please contact us using the form below.
      </p>
      <AboutPage />
      <TestimonialSection
        title="See what all the talk is about!"
        subtitle="Transformative Client experience from all around the globe"
        testimonials={testimonialsData}
      />
      <div className="my-5 border-t border-neutral-600/50 max-w-xl mx-auto"/>
    </section>
  );
};

export default BulkOrderSection;

// Sample data for the testimonials
const testimonialsData = [
  {
    id: 1,
    quote:
      "He is super fast and creative, delivered the website design within a week. Highly skilled and professional designer!",
    name: "Sarah",
    role: "Kickflip",
    imageSrc:
      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900?q=80&w=1965&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Impressed by the professionalism and attention to details in UI design. Highly Recommended!",
    name: "Martha",
    role: "Unicell",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "A seamless experience from start to finish. Josh made our app design and experience really impressive.",
    name: "Victor",
    role: "Horizone",
    imageSrc:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900?q=80&w=1887&auto=format&fit=crop",
  },
];

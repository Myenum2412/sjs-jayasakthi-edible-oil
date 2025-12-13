import React from "react";
import AboutPage from "../about-page";
import { TestimonialSection } from "../testimonials";
import WorldMap from "../ui/world-map";

const BulkOrderSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Bulk Order
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5">
      Partner with Purity – Bulk & Wholesale Solutions for your business.
      </p>
      <AboutPage />
      <TestimonialSection
        title="See what all the talk is about!"
        subtitle="Transformative Client experience from all around the globe"
        testimonials={testimonialsData}
      />
      <div className="my-5 border-t border-neutral-600/50 max-w-xl mx-auto" />
      <p className="text-center text-lg md:text-3xl tracking-tighter max-w-xl font-regular mx-auto my-10">
        We deliver your order worldwide.
      </p>
      <WorldMap
        lineColor="#4e7e12"
        
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
              label:'Chennai'
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
              label:'Dubai'
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919, label:'Kuwait' }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393, label:'Kochi' }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209, label:'New Delhi' }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113, label:'Singapore' }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219, label:'Sri Lanka' }, // Nairobi
          },
        ]}
      />
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

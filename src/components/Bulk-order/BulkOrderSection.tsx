import AboutPage from "../about-page";
import WorldMap from "../ui/world-map";
import HomeContactForm from "../HomeContactForm";
import ContactUs1 from "../mvpblocks/contact-us-1";
import PageBreadcrumb from "../ui/PageBreadcrumb";

const BulkOrderSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <PageBreadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Bulk Order" }
        ]}
      />
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-foreground">
        Bulk Order Solutions
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5 text-foreground/80">
      Partner with Sri Jayasakthi Edible Oils – Premium bulk & wholesale solutions for your business needs. Get competitive pricing, reliable supply, and dedicated support for high-volume orders.
      </p>
      <AboutPage />
      <div className="my-5 border-t border-primary/20 max-w-xl mx-auto" />
      <p className="text-center text-lg md:text-3xl tracking-tighter max-w-xl font-regular mx-auto my-10 text-foreground">
        We deliver your order worldwide.
      </p>
      <WorldMap
        lineColor="hsl(var(--primary))"
        
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

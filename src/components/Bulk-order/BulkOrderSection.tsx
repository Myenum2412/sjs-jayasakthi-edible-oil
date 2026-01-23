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
      <p className="text-lg md:text-xl tracking-tighter font-regular text-left my-5 text-foreground/80">
        Partner with Sri Jayasakthi Edible Oils Premium bulk & wholesale solutions for your business needs. Get competitive pricing, reliable supply, and dedicated support for high-volume orders.
      </p>
      <AboutPage />


    </section>
  );
};

export default BulkOrderSection;

import React from "react";
import HomeContactForm from "../HomeContactForm";

const ContactSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Contact Us
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5">
        We are here to help you. Please contact us using the form below.
      </p>
      <HomeContactForm/>
    </section>
  );
};

export default ContactSection;

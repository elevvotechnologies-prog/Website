import React from "react";
import Hero from "../components/Hero";
import ServicesSnippet from "../components/ServicesSnippet";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import CtaBanner from "../components/CtaBanner";

export default function HomePage({ nav }) {
  return (
    <div>
      <Hero nav={nav} />
      <ServicesSnippet nav={nav} />
      <WhyUs />
      <Testimonials />
      <CtaBanner nav={nav} />
    </div>
  );
}

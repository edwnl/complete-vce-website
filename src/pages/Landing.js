import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import design from "../media/hero.svg"
import Features from "../components/sections/Features";
import Footer from "../components/sections/Footer"
import Tutors from "../components/sections/Tutors";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Melbourne's leading VCE Physics Specialists."
        subtitle="We're here to simplify VCE Physics for you."
        image={design}
        ctaText="Book a Trial Lesson Now"
        ctaLink="/pricing"
      />
        <Tutors/>
        <Features/>


    </LandingLayout>

  );
}

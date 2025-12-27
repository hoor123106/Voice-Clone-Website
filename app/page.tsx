import AvailableSection from "./components/AvailableSection/AvailableSection";
import Footer from "./components/footer/Footer";
import GainSection from "./components/GainSection/GainSection";
import GiftSection from "./components/GiftSection/GiftSection";
import PricingSection from "./components/Pricing-section/pricing-section";
import TestimonialCarousel from "./components/TestimonialsCrousel/TestimonialsCrousels";
import Image from "next/image";
import Hero from "./components/HeroSection/Hero";
import Meeting from "./components/MeetingSection/Meeting";
import Course from "./components/CourseSection/Course";
import Card from "./components/CardSection/Card";
import FAQ from "./components/FAQSection/FAQ";

export default function Home() {
  return <div>
    <Hero />
    <Meeting></Meeting>
    <AvailableSection />
    <GainSection />
    <Course></Course>
    <Card></Card>
    <GiftSection />
    <TestimonialCarousel />
    <PricingSection />

    <FAQ></FAQ>
    <Footer />
  </div>

}
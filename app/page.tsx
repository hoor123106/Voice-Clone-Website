import AvailableSection from "./components/AvailableSection/AvailableSection";
import Footer from "./components/footer/Footer";
import GainSection from "./components/GainSection/GainSection";
import GiftSection from "./components/GiftSection/GiftSection";
import PricingSection from "./components/Pricing-section/pricing-section";
import TestimonialCarousel from "./components/TestimonialsCrousel/TestimonialsCrousels";

export default function Home() {
  return <div>
    <AvailableSection />
    <GainSection />
    <GiftSection />
    <TestimonialCarousel />
    <PricingSection />
    <Footer />
  </div>
}

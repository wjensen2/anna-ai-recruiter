import { HeroSection } from "@/components/marketing/hero-section"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { FeaturesSection } from "@/components/marketing/features-section"
import { Testimonials } from "@/components/marketing/testimonials"
import { PricingPreview } from "@/components/marketing/pricing-preview"
import { CTASection } from "@/components/marketing/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <Testimonials />
      <PricingPreview />
      <CTASection />
    </>
  )
}

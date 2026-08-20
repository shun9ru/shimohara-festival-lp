import { festivalData } from './data/festivalData'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { FestivalTimeline } from './components/FestivalTimeline'
import { RoleSection } from './components/RoleSection'
import { MemorySection } from './components/MemorySection'
import { PhotoGallery } from './components/PhotoGallery'
import { TestimonialSection } from './components/TestimonialSection'
import { FutureSection } from './components/FutureSection'
import { FAQSection } from './components/FAQSection'
import { ParticipationSection } from './components/ParticipationSection'
import { EventInformation } from './components/EventInformation'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FixedCTABar } from './components/FixedCTABar'

export default function App() {
  // festivalData.ts の sections で各セクションの表示・非表示を切り替えられます
  const { sections } = festivalData

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {sections.about && <AboutSection />}
        {sections.timeline && <FestivalTimeline />}
        {sections.roles && <RoleSection />}
        {sections.memories && <MemorySection />}
        {sections.gallery && <PhotoGallery />}
        {sections.testimonials && <TestimonialSection />}
        {sections.information && <EventInformation />}
        {sections.participation && <ParticipationSection />}
        {sections.faq && <FAQSection />}
        {sections.future && <FutureSection />}
        {sections.finalCta && <FinalCTA />}
      </main>
      <Footer />
      <FixedCTABar />
    </>
  )
}

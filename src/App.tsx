import { useState } from 'react'
import { Countdown } from './components/Countdown'
import { CoupleStory } from './components/CoupleStory'
import { EnvelopeIntro } from './components/EnvelopeIntro'
import { EventTimeline } from './components/EventTimeline'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { LocationSection } from './components/LocationSection'
import { Navigation } from './components/Navigation'
import { PhotoGallery } from './components/PhotoGallery'
import { WeddingDetails } from './components/WeddingDetails'

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)

  return (
    <>
      <EnvelopeIntro isOpen={isInvitationOpen} onOpen={() => setIsInvitationOpen(true)} />
      <Navigation />
      <main>
        <HeroSection />
        <Countdown />
        <CoupleStory />
        <WeddingDetails />
        <EventTimeline />
        <PhotoGallery />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}

export default App

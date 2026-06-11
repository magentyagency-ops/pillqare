
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ProblemSolution } from './components/sections/ProblemSolution'
import { HowItWorks } from './components/sections/HowItWorks'
import { VideoBubbles } from './components/sections/VideoBubbles'
import { SafetySystem } from './components/sections/SafetySystem'
import { FounderStory } from './components/sections/FounderStory'
import { LisaApp } from './components/sections/LisaApp'
import { MediaNews } from './components/sections/MediaNews'
import { CRMAndSpecs } from './components/sections/CRMAndSpecs'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoBubbles />
        <ProblemSolution />
        <HowItWorks />
        <SafetySystem />
        <FounderStory />
        <LisaApp />
        <MediaNews />
        <CRMAndSpecs />
      </main>
      <Footer />
    </>
  )
}

export default App

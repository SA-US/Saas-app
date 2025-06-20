
import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'  
import { subjectsColors, recentSessions } from '@/constants/index'
const Page = () => {
  return (
    <main>
      <h1 className='text-3xl font-bold'>Popular Companions</h1>
<section className='home-section'>
  <CompanionCard
  id="1"
  name="Neura the Brainy Expert"
  topic = "Neural Network of the Brain"
  subject = "science"
  duration = "45 minutes"
  color = "#E5D0FF"
  />
  <CompanionCard
  id="2"
  name="Verba the Vocabulary Builder"
  topic = "English Literature"
  subject = "language"
  duration = "45 minutes"
  color = "#BDE7FF"
  />
  <CompanionCard
  id="3"
  name="Countsy the Number Wizard"
  topic = "Derivatives & Integrals"
  subject = "maths"
  duration = "30 minutes"
  color = "#FFDA6E"
  />
</section>

<section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full  "
                color={subjectsColors.science}
                
            />
            <CTA />
        </section>


     
          </main>
  )
}

export default Page
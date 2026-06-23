import {

  HeroSection,

} from '../components/landing'

import { Footer } from '../components/recipe-card/Footer'
import { StorySection } from '../pages/StorySection'
import { WhySection } from '../pages/WhySection'




type LandingPageProps = {
  onGoToAuth: () => void
}




export function LandingPage({ onGoToAuth }: LandingPageProps) {


  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <main className="landing-page">
      <HeroSection
        kicker="WorkSpaceNow"
        title="Ti diamo il benvenuto su WorkSpaceNow"
        description="Un portale nato per offrire spazi di coworking per freelance, startup e studenti!"
        primaryActionLabel="Compila il form e richiedi subito uno spazio!"
        onPrimaryAction={scrollToRegistration}


      />

      <StorySection />
      <WhySection />
      <section className="landing-section">
        <h2>Alcuni dei nostri spazi!</h2>
        <div className="cards-grid">

          <article className="info-card">
            <h3>Ufficio bicocca</h3>
            <p>Città: Milano</p>
            <p>Descrizione: Ufficio bicocca è una dei nostri nuovi spazi di lavoro , dispone di molte sale riunioni e ambianti di lavoro dove potrai performare al meglio</p>
            <p>Servizi: 3 Sale riunioni, 10 ambienti di lavoro/studio, area bar per una break time, area fumatori</p>
          </article>

          <article className="info-card">
            <h3>Ufficio Merlata Bloom</h3>
            <p>Città: Milano</p>
            <p>Descrizione: Ufficio Melrata Bloom è una dei nostri spazi di lavoro più grandi , dispone di molte sale riunioni e ambianti di lavoro dove potrai performare al meglio</p>
            <p>Servizi: 2 Sale riunioni, 20 ambienti di lavoro/studio, area bar per una break time, giardino per una pausa all'aperto</p>
          </article>

          <article className="info-card">
            <h3>Ufficio OrioCenter</h3>
            <p>Città: Orio al Serio</p>
            <p>Ufficio bicocca è una dei nostri spazi di lavoro più grandi , dispone di molte sale riunioni e ambianti di lavoro dove potrai performare al meglio</p>
            <p>Servizi: 6 Sale riunioni, 35 ambienti di lavoro/studio, area bar per una break time, area fumatori, terrazza per una eventuale pausa sigaretta</p>
          </article>

        </div>

        <div className="section-gallery">

        </div>

      </section>


      <section id="registration" className="landing-section">
        <h2>Vuoi far uso di uno dei nostri spazi? , Accedi o registrati e compila il form nella tua area personale!.</h2>
        <p className="subtitle">

        </p>
        <button type="button" onClick={onGoToAuth}>
          Vai alla registrazione utente
        </button>
      </section>

      <Footer />
    </main>

  )
}

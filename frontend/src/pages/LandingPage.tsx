import {

  HeroSection,

} from '../components/landing'
import logo from '../assets/logo.png'
import immagine1 from '../assets/bobilcarlino.png'
import immagine2 from '../assets/meticcio.png'
import immagine3 from '../assets/maremmanolabrador.png'
import { Footer } from '../components/recipe-card/Footer'
import { StorySection } from '../pages/StorySection'
import { WhySection } from '../pages/WhySection'




type LandingPageProps = {
  onGoToAuth: () => void
}
const technologyImageLinks = [
  {
    src: immagine2,
    alt: 'Il meticcio'
  },
  {
    src: immagine1,
    alt: 'Bob il carlino',
  },
  {
    src: immagine3,
    alt: 'Maremmanolabrador',

  },
]



export function LandingPage({ onGoToAuth }: LandingPageProps) {


  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  return (
    <main className="landing-page">
      <HeroSection
        kicker="ZampaCasa"
        title="Benevenuto/a su ZampaCasa!"
        description="Un portale dedicato per salvare animali in difficoltà!"
        primaryActionLabel="Compila il form e richiedi la disponibiltà di adozione!"
        onPrimaryAction={scrollToRegistration}
        imageUrl={logo}

      />
      <StorySection />
      <WhySection />
      <section className="landing-section">
        <h2>Alcuni dei nostri compagni</h2>
        <div className="cards-grid">

          <article className="info-card">
            <h3>Berlino il meticcio</h3>
            <p>Specie: meticcio</p>
            <p>Età: 3 anni</p>
            <p>Descrizione: Berlino è un animale gentile e fedele, che ama giocare e fare lunghe passeggiate.</p>
          </article>

          <article className="info-card">
            <h3>Bob il carlino</h3>
            <p>Specie: carlino</p>
            <p>Età: 5 anni</p>
            <p>Descrizione: Bob è un carlino dolce e affettuoso, alla ricerca di una famiglia amorevole che lo accolga.</p>
          </article>

          <article className="info-card">
            <h3>Mario il labrador</h3>
            <p>Specie: labrador</p>
            <p>Età: 2 anni</p>
            <p>Descrizione: Mario è un cane allegro e socievole, che ama correre e nuotare.</p>
          </article>

        </div>

        <div className="section-gallery">
          {technologyImageLinks.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
          ))}
        </div>

      </section>


      <section id="registration" className="landing-section">
        <h2>Vuoi adottare uno dei nostri compagni? , Accedi o registrati e compila il form nella tua area personale!.</h2>
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

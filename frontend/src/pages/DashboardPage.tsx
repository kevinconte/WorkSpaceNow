import { useState } from 'react'
import { buildApiBase } from '../utils/api'
import { Footer } from '../components/recipe-card/Footer'

type DashboardPageProps = {
  email: string
  onBackToLanding: () => void
}

const apiBase = buildApiBase(import.meta.env.VITE_API_URL)

export function DashboardPage({ email, onBackToLanding }: DashboardPageProps) {
  const [nomecognome, setNomeCognome] = useState('')
  const [città, setCittà] = useState('')
  const [spazio, setspazio] = useState('')
  const [numeropersone, setnumeropersone] = useState('')
  const [descrizione, setDescrizione] = useState('')
  const [emailEvento, setEmail] = useState(email)
  const [loading, setLoading] = useState(false)
  const [messaggio, setMessaggio] = useState('')
  const [errore, setErrore] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessaggio('')
    setErrore('')

    try {
      const response = await fetch(`${apiBase}/RichiestaSpazio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomecognome,
          città,
          spazio: spazio,
          email: email,
          numeropersone: numeropersone,
          descrizione,
        }),
      })

      if (!response.ok) {
        const body = await response.json()
        throw new Error(body.message ?? 'Errore durante l\'invio')
      }

      const body = await response.json()
      setMessaggio(body.message)
      setNomeCognome('')
      setCittà('')
      setspazio('')
      setDescrizione('')
      setnumeropersone('')
      setEmail(email)
    } catch (err) {
      setErrore(err instanceof Error ? err.message : 'Errore di rete')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <section className="card home-card">
        <header className="home-header">
          <div>
            <h1>MODULO DI RICHIESTA SPAZIO LAVORATIVO</h1>
            <p className="subtitle">
              Login effettuato con <strong>{email}</strong>
            </p>
          </div>
          <button type="button" onClick={onBackToLanding}>
            Esci
          </button>
        </header>

        <p className="placeholder-text">
          Di seguito compila il modulo per richiedere uno spazio di lavoro dove potrai performare e portare al top la tua attività/studio
        </p>

        {messaggio && <p className="success-message">{messaggio}</p>}
        {errore && <p className="error-message">{errore}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NomeCognome/Azienda"
            value={nomecognome}
            onChange={(e) => setNomeCognome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={emailEvento}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Città"
            value={città}
            onChange={(e) => setCittà(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Spazio Selezionato"
            value={spazio}
            onChange={(e) => setspazio(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Numero di persone"
            value={numeropersone}
            onChange={(e) => setnumeropersone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrizione attività"
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Invio in corso...' : 'Invia form'}
          </button>
        </form>
      </section>
      <Footer />
    </main>
  )
}

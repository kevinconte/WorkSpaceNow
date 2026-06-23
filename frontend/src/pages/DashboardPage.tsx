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
  const [categoria, setCategoria] = useState('')
  const [città, setCittà] = useState('')
  const [nomeanimale, setnomeanimale] = useState('')
  const [tipoabitazione, setTipoAbitazione] = useState('')
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
      const response = await fetch(`${apiBase}/richieste-adozione`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomecognome,
          categoria,
          città,
          animale: nomeanimale,
          email: email,
          abitazione: tipoabitazione,
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
      setCategoria('')
      setCittà('')
      setnomeanimale('')
      setDescrizione('')
      setTipoAbitazione('')
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
            <h1>MODULO DI RICHIESTA ADOZIONE</h1>
            <p className="subtitle">
              Login effettuato con <strong>{email}</strong>
            </p>
          </div>
          <button type="button" onClick={onBackToLanding}>
            Esci
          </button>
        </header>

        <p className="placeholder-text">
          Di seguito compila il modulo per richiedere l'adozione di uno dei nostri amici a quattro zampe. Il nostro team esaminerà la tua richiesta e ti contatterà al più presto per discutere i dettagli dell'adozione. Grazie per il tuo interesse nel dare una casa amorevole a uno dei nostri compagni!
        </p>

        {messaggio && <p className="success-message">{messaggio}</p>}
        {errore && <p className="error-message">{errore}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome e Cognome"
            value={nomecognome}
            onChange={(e) => setNomeCognome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Città di residenza"
            value={città}
            onChange={(e) => setCittà(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nome dell'animale"
            value={nomeanimale}
            onChange={(e) => setnomeanimale(e.target.value)}
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
            placeholder="Tipo di Abitazione"
            value={tipoabitazione}
            onChange={(e) => setTipoAbitazione(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Descrizione"
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

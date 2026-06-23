import { useReveal } from '../hooks/useReveal';

export function WhySection() {
    const ref = useReveal<HTMLDivElement>('.htimeline__item');

    return (
        <section className="section section--how" id="come-funziona">
            <div className="section__inner">
                <h2 className="section__title">Perchè sceglierci e quali sono i nostri vantaggi</h2>
                <p className="section__subtitle">In tre semplici punti</p>

                <div className="htimeline" ref={ref}>
                    <div className="htimeline__line" />

                    <div className="htimeline__items">
                        <div className="htimeline__item reveal-up">
                            <div className="htimeline__dot">🔐</div>
                            <div className="htimeline__card">
                                <span className="timeline__label">Motivo 1</span>
                                <h3 className="timeline__heading">Affidabilità</h3>
                                <p className="timeline__text">
                                    Collaboriamo solo con canili certificati e affidabili, garantendo che ogni cane presente sulla nostra piattaforma sia in buone condizioni di salute e ben curato. La sicurezza e il benessere degli animali sono la nostra priorità assoluta.
                                </p>
                            </div>
                        </div>

                        <div className="htimeline__item reveal-up">
                            <div className="htimeline__dot">📝</div>
                            <div className="htimeline__card">
                                <span className="timeline__label">Motivo 2</span>
                                <h3 className="timeline__heading">Trasparenza</h3>
                                <p className="timeline__text">
                                    Il nostro processo di adozione è semplice e trasparente. Offriamo un'interfaccia intuitiva che guida gli utenti attraverso ogni fase del processo, dalla ricerca del cane ideale alla finalizzazione dell'adozione. Siamo sempre disponibili per supportare i nostri utenti e rispondere a qualsiasi domanda o dubbio.
                                </p>
                            </div>
                        </div>

                        <div className="htimeline__item reveal-up">
                            <div className="htimeline__dot">❤️</div>
                            <div className="htimeline__card">
                                <span className="timeline__label">Motivo 3</span>
                                <h3 className="timeline__heading">Alta riduzione di randagismo</h3>
                                <p className="timeline__text">
                                    Riduciamo drasticamente il randagismo, dando una seconda possibilità a cani che altrimenti rimarrebbero senza casa. Ogni adozione è un passo verso un mondo in cui ogni cane ha una famiglia amorevole e una casa per sempre.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

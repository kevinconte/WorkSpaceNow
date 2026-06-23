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
                                    Collaboriamo solo aree di lavoro affidabili che ragantiscono disponibilità, sicurezza e versatilità.
                                </p>
                            </div>
                        </div>

                        <div className="htimeline__item reveal-up">
                            <div className="htimeline__dot">📝</div>
                            <div className="htimeline__card">
                                <span className="timeline__label">Motivo 2</span>
                                <h3 className="timeline__heading">Trasparenza</h3>
                                <p className="timeline__text">
                                    Il nostro processo di prentoazione è semplice, scegli il luogo adatto al tuo lavoro, compila il form e il gioco è fatto.
                                </p>
                            </div>
                        </div>

                        <div className="htimeline__item reveal-up">
                            <div className="htimeline__dot">❤️</div>
                            <div className="htimeline__card">
                                <span className="timeline__label">Motivo 3</span>
                                <h3 className="timeline__heading">Aumentiamo la tua produttività</h3>
                                <p className="timeline__text">
                                    Aumentiamo drasticamente la tua produttività facendoti accedere ad ambianti di lavoro appositi per te!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

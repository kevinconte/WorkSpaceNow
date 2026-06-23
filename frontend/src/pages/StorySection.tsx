import { useReveal } from '../hooks/useReveal';

export function StorySection() {
    const ref = useReveal<HTMLDivElement>('.timeline__item');

    return (
        <section className="section section--alt" id="storia">
            <div className="section__inner">
                <h2 className="section__title">La nostra storia</h2>
                <p className="section__subtitle">Come è nato ZampaCasa</p>

                <div className="timeline" ref={ref}>
                    <div className="timeline__line" />

                    <div className="timeline__item reveal-up">
                        <div className="timeline__dot">💔</div>
                        <div className="timeline__card">
                            <span className="timeline__label">Il problema</span>
                            <h3 className="timeline__heading">
                                Cani abbandonati che nessuno sceglie
                            </h3>
                            <p className="timeline__text">
                                Ogni anno migliaia di cani vengono abbandonati e finiscono nei
                                canili, dove restano mesi o addirittura anni, senza trovare una famiglia.
                            </p>
                        </div>
                    </div>

                    <div className="timeline__item timeline__item--right reveal-up">
                        <div className="timeline__dot">💡</div>
                        <div className="timeline__card">
                            <span className="timeline__label">L'idea</span>
                            <h3 className="timeline__heading">
                                Troviamo una casa per ogni cane
                            </h3>
                            <p className="timeline__text">
                                ZampaCasa nasce dall'idea di creare un portale dedicato che metta in contatto chi vuole adottare un cane con i canili, facilitando il processo di adozione e dando una seconda possibilità a questi animali.
                            </p>
                        </div>
                    </div>

                    <div className="timeline__item reveal-up">
                        <div className="timeline__dot">🎯</div>
                        <div className="timeline__card">
                            <span className="timeline__label">La missione</span>
                            <h3 className="timeline__heading">
                                Ogni cane merita una casa per sempre
                            </h3>
                            <p className="timeline__text">
                                La nostra missione è svuotare i canili, non riempirli. Vogliamo
                                che ogni adozione sia consapevole e definitiva, così che nessun
                                cane debba tornare indietro. Meno ritorni significa più posti
                                per chi è ancora in attesa e più storie a lieto fine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useReveal } from '../hooks/useReveal';

export function StorySection() {
    const ref = useReveal<HTMLDivElement>('.timeline__item');

    return (
        <section className="section section--alt" id="storia">
            <div className="section__inner">
                <h2 className="section__title">La nostra storia</h2>
                <p className="section__subtitle">Come è nato WorkSpaceNow</p>

                <div className="timeline" ref={ref}>
                    <div className="timeline__line" />

                    <div className="timeline__item reveal-up">
                        <div className="timeline__dot">💔</div>
                        <div className="timeline__card">
                            <span className="timeline__label">Il problema</span>
                            <h3 className="timeline__heading">
                                Sappiamo tutti che trovare un ambiente di lavoro pubblico è faticoso
                            </h3>
                            <p className="timeline__text">
                                Perdità di tempo nel cercare spazi di coworking e sale di riunioni sempre piene e inaccessibili
                            </p>
                        </div>
                    </div>

                    <div className="timeline__item timeline__item--right reveal-up">
                        <div className="timeline__dot">💡</div>
                        <div className="timeline__card">
                            <span className="timeline__label">L'idea</span>
                            <h3 className="timeline__heading">
                                Troviamo una ambiente di lavoro per tutti
                            </h3>
                            <p className="timeline__text">
                                WorkSpaceNow nasce per poterti far lavorare in tranquillità con uno spazio di lavoro assicurato!
                            </p>
                        </div>
                    </div>

                    <div className="timeline__item reveal-up">
                        <div className="timeline__dot">🎯</div>
                        <div className="timeline__card">
                            <span className="timeline__label">La missione</span>
                            <h3 className="timeline__heading">
                                Ogni lavoratore merita un suo ambiente di lavoro
                            </h3>
                            <p className="timeline__text">
                                La nostra missione è darti un ambiente di lavoro che ti permetta di organizzarti al meglio , anch eper eventuali riunioni , il uttto semplciemente prenotando la tua are lavoro!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

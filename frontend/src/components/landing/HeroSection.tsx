import './HeroSection.css'

type HeroSectionProps = {
  kicker: string
  title: string
  description: string
  primaryActionLabel: string
  onPrimaryAction: () => void
  secondaryActionLabel?: string
  onSecondaryAction?: () => void
  imageUrl?: string
  imageAlt?: string
}

export function HeroSection({
  kicker,
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,

}: HeroSectionProps) {
  return (
    <header className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__kicker">{kicker}</p>
          <h1 className="hero-section__title">{title}</h1>
          <p className="hero-section__description">{description}</p>
          <div className="hero__visual" aria-hidden="true">

          </div>
          <div className="hero-section__actions">
            <button type="button" onClick={onPrimaryAction}>
              {primaryActionLabel}
            </button>

            {secondaryActionLabel && onSecondaryAction && (
              <button
                type="button"
                className="hero-section__secondary-action"
                onClick={onSecondaryAction}
              >
                {secondaryActionLabel}
              </button>
            )}
          </div>
        </div>


      </div>
    </header>
  )
}

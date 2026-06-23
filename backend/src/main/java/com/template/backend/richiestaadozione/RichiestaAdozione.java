package com.template.backend.richiestaadozione;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
// nome della tabella
@Table(name = "Richiesta Adozione")
public class RichiestaAdozione {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 255)
  private String nomecognome;

  @Column(nullable = false, length = 100)
  private String categoria;

  @Column(nullable = false, columnDefinition = "TEXT")
  private String descrizione;

  @Column(nullable = false, length = 255)
  private String abitazione;

  @Column(nullable = false, length = 191)
  private String email;
  @Column(nullable = false, length = 191)
  private String città;
  @Column(nullable = false, length = 191)
  private String animale;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private StatoApprovazione stato = StatoApprovazione.IN_ATTESA;

  RichiestaAdozione() {
  }

  public RichiestaAdozione(String nomecognome, String categoria, String descrizione, String città, String email,
      String abitazione, String animale) {
    this.nomecognome = nomecognome;
    this.categoria = categoria;
    this.descrizione = descrizione;
    this.città = città;
    this.email = email;
    this.abitazione = abitazione;
    this.animale = animale;
    this.stato = StatoApprovazione.IN_ATTESA;
  }

  public Long getId() {
    return id;
  }

  public String getNomeCognome() {
    return nomecognome;
  }

  public String getCategoria() {
    return categoria;
  }

  public String getDescrizione() {
    return descrizione;
  }

  public String getcittà() {
    return città;
  }

  public String getEmail() {
    return email;
  }

  public String getAnimale() {
    return animale;
  }

  public StatoApprovazione getStato() {
    return stato;
  }

  public void setStato(StatoApprovazione stato) {
    this.stato = stato;
  }
}

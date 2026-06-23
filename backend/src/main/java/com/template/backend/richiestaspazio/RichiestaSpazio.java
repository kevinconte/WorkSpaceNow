package com.template.backend.richiestaspazio;

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
@Table(name = "Richiesta Spazio")
public class RichiestaSpazio {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 255)
  private String nomecognome;

  @Column(nullable = false, length = 100)
  private String spazio;

  @Column(nullable = false, columnDefinition = "TEXT")
  private String descrizione;

  @Column(nullable = false, length = 255)
  private String numeropersone;

  @Column(nullable = false, length = 191)
  private String email;
  @Column(nullable = false, length = 191)
  private String città;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private StatoApprovazione stato = StatoApprovazione.IN_ATTESA;

  RichiestaSpazio() {
  }

  public RichiestaSpazio(String nomecognome, String spazio, String descrizione, String città, String email,
      String numeropersone) {
    this.nomecognome = nomecognome;
    this.spazio = spazio;
    this.descrizione = descrizione;
    this.città = città;
    this.email = email;
    this.numeropersone = numeropersone;

    this.stato = StatoApprovazione.IN_ATTESA;
  }

  public Long getId() {
    return id;
  }

  public String getNomeCognome() {
    return nomecognome;
  }

  public String getspazio() {
    return spazio;
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

  public String getnumeropersone() {
    return numeropersone;
  }

  public StatoApprovazione getStato() {
    return stato;
  }

  public void setStato(StatoApprovazione stato) {
    this.stato = stato;
  }
}

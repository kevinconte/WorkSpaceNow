package com.template.backend.richiestaadozione;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RichiestaAdozioneRequest(
                @NotBlank(message = "Il nome e cognome sono obbligatori") String nomecognome,
                @NotBlank(message = "La categoria è obbligatoria") String categoria,
                @NotBlank(message = "La descrizione è obbligatoria") String descrizione,
                @NotBlank(message = "La città è obbligatoria") String città,
                @NotBlank(message = "L'email è obbligatoria") @Email(message = "Email non valida") String email,
                @NotBlank(message = "L'abitazione è obbligatoria") String abitazione,
                @NotBlank(message = "L'animale è obbligatorio") String animale) {
}

package com.template.backend.richiestaspazio;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record RichiestaSpazioRequest(
        @NotBlank(message = "Il nome e cognome sono obbligatori") String nomecognome,
        @NotBlank(message = "Il nome dello spazio è obbligatorio") String spazio,
        @NotBlank(message = "La descrizione è obbligatoria") String descrizione,
        @NotBlank(message = "La città è obbligatoria") String città,
        @NotBlank(message = "L'email è obbligatoria") @Email(message = "Email non valida") String email,
        @NotBlank(message = "Il numero delle persone è obbligatorio") String numeropersone) {
}

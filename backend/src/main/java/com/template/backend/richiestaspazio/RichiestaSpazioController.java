package com.template.backend.richiestaspazio;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/RichiestaSpazio")
public class RichiestaSpazioController {

  private final RichiestaSpazioRepository repository;

  public RichiestaSpazioController(RichiestaSpazioRepository repository) {
    this.repository = repository;
  }

  @PostMapping
  public ResponseEntity<Map<String, String>> RichiestaSpazio(@Valid @RequestBody RichiestaSpazioRequest request) {
    RichiestaSpazio evento = new RichiestaSpazio(
        request.nomecognome(),
        request.email(),
        request.città(),
        request.spazio(),
        request.descrizione(),
        request.numeropersone()

    );
    repository.save(evento);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(Map.of("message", "Richiesta dello spazio inviata con successo"));
  }

  @GetMapping
  public List<RichiestaSpazio> richiestaSpazio() {
    return repository.findAll();
  }
}

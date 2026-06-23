package com.template.backend.richiestaadozione;

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
@RequestMapping("/api/richieste-adozione")
public class RichiestaAdozioneController {

  private final RichiestaAdozioneRepository repository;

  public RichiestaAdozioneController(RichiestaAdozioneRepository repository) {
    this.repository = repository;
  }

  @PostMapping
  public ResponseEntity<Map<String, String>> creaEvento(@Valid @RequestBody RichiestaAdozioneRequest request) {
    RichiestaAdozione evento = new RichiestaAdozione(
        request.nomecognome(),
        request.categoria(),
        request.descrizione(),
        request.città(),
        request.email(),
        request.abitazione(),
        request.animale());
    repository.save(evento);
    return ResponseEntity.status(HttpStatus.CREATED)
        .body(Map.of("message", "Richiesta di adozione inviata con successo"));
  }

  @GetMapping
  public List<RichiestaAdozione> listaEventi() {
    return repository.findAll();
  }
}

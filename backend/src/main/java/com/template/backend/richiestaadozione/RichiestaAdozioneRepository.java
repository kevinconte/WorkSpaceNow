package com.template.backend.richiestaadozione;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RichiestaAdozioneRepository extends JpaRepository<RichiestaAdozione, Long> {
  List<RichiestaAdozione> findByEmail(String email);
}

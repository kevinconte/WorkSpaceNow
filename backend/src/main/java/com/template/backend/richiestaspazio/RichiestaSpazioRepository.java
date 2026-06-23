package com.template.backend.richiestaspazio;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RichiestaSpazioRepository extends JpaRepository<RichiestaSpazio, Long> {
  List<RichiestaSpazio> findByEmail(String email);
}

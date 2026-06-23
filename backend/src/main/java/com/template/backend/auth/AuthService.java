package com.template.backend.auth;

import com.template.backend.user.UserEntity;
import com.template.backend.user.UserRepository;
import java.util.Locale;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public AuthService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public AuthResponse register(AuthRequest request) {
    String email = normalizeEmail(request.email());

    if (userRepository.findByEmail(email).isPresent()) {
      throw new IllegalStateException("Email gia registrata");
    }

    String passwordHash = passwordEncoder.encode(request.password());
    userRepository.save(new UserEntity(email, passwordHash));

    return new AuthResponse(true, "Registrazione completata", email);
  }

  public AuthResponse login(AuthRequest request) {
    String email = normalizeEmail(request.email());

    UserEntity user = userRepository
      .findByEmail(email)
      .orElseThrow(() -> new IllegalArgumentException("Credenziali non valide"));

    if (!passwordEncoder.matches(request.password(), user.getPasswordHash())) {
      throw new IllegalArgumentException("Credenziali non valide");
    }

    return new AuthResponse(true, "Login effettuato", user.getEmail());
  }

  private String normalizeEmail(String email) {
    return email.trim().toLowerCase(Locale.ROOT);
  }
}

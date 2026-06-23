package com.template.backend.auth;

import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @GetMapping("/health")
  public Map<String, String> health() {
    return Map.of("status", "ok");
  }

  @PostMapping("/auth/register")
  public ResponseEntity<AuthResponse> register(@Valid @RequestBody AuthRequest request) {
    return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(request));
  }

  @PostMapping("/auth/login")
  public AuthResponse login(@Valid @RequestBody AuthRequest request) {
    return authService.login(request);
  }

  @ExceptionHandler(IllegalArgumentException.class)
  public ResponseEntity<Map<String, String>> onUnauthorized(IllegalArgumentException ex) {
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", ex.getMessage()));
  }

  @ExceptionHandler(IllegalStateException.class)
  public ResponseEntity<Map<String, String>> onConflict(IllegalStateException ex) {
    return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message", ex.getMessage()));
  }
}

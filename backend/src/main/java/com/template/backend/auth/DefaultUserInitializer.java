package com.template.backend.auth;

import com.template.backend.user.UserEntity;
import com.template.backend.user.UserRepository;
import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DefaultUserInitializer implements CommandLineRunner {

  private static final Logger log = LoggerFactory.getLogger(DefaultUserInitializer.class);

  private final UserRepository userRepository;
  private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  @Value("${app.default-user.enabled:true}")
  private boolean enabled;

  @Value("${app.default-user.email:demo@demo.it}")
  private String defaultEmail;

  @Value("${app.default-user.password:password123}")
  private String defaultPassword;

  public DefaultUserInitializer(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public void run(String... args) {
    if (!enabled) {
      return;
    }

    String email = defaultEmail.trim().toLowerCase(Locale.ROOT);

    if (userRepository.findByEmail(email).isPresent()) {
      log.info("Default user already present: {}", email);
      return;
    }

    String hash = passwordEncoder.encode(defaultPassword);
    userRepository.save(new UserEntity(email, hash));
    log.info("Default user created: {}", email);
  }
}
